---
name: flat-component-refactor
description: Refactor React/Next.js component TSX to a flat render tree (single wrapper, shallow component nesting), move non-trivial logic into co-located hooks, organize files into a nested folder tree (one component + one hook per slice folder; utils/, shared/, context/, types/ for cross-cutting concerns), and avoid trivial translation-only hooks. Use when splitting complex JSX or extracting behavior without prop-drilling.
---

# Flat Component Refactor

## When to use

- The user asks to refactor a component for readability/consistency.
- A component has multiple component-nesting levels inside its `return` JSX.
- Logic is mixed into `tsx` or passed down as callback/handlers via props during component splitting.
- The refactor needs to extract a deeper nested section into a separate component while keeping the parent JSX flat.

## Refactor goals

- Keep the component render tree flat: a single root wrapper tag and one level of components inside it.
- Move non-trivial logic into hooks. Keep `tsx` focused on composition and rendering.
- When extracting new components, extract their corresponding logic into new hooks alongside those components - only when the hook carries real logic (see "Hook granularity" below).
- Avoid prop-drilling logic/handlers. Prefer the extracted child component to call its own hook.
- Lay out files in a nested directory tree that mirrors how components nest in JSX, not a single flat folder of dozens of sibling files.

## Rules for TSX structure

1. Ensure the component `return` has exactly one top-level wrapper element (`div`, `section`, etc.).
2. Inside that single wrapper, allow:
   - DOM elements nested as needed (`div`, `p`, `ul`, etc.).
   - Component tags that are direct children of the wrapper.
3. Inside the single wrapper, avoid patterns where one component contains another component tag via JSX nesting (`component-in-component-in-component`) in the same file.
4. Extract "control clusters" into their own components even when they only contain DOM elements:
   - If a logical section inside the parent `return` becomes a block of controls with event handlers and/or inline markup (for example: a Swiper navigation Prev/Next button group that includes `onClick` handlers and inline SVG), it should be extracted into a dedicated component file.
   - This keeps the parent component shallow and makes the JSX composition readable.
5. If deeper component nesting is necessary:
   - Extract the nested portion into a new component file.
   - Replace the deeper nested JSX with a single direct child component in the parent `tsx`.
6. Keep nesting shallow in the refactored parent component. Any deeper component nesting and complex control blocks should live inside extracted child components.

## Rules for logic refactoring

1. Move logic into hook files:
   - State (`useState`), effects (`useEffect`), memoization (`useMemo`), derived values, event handlers, and decision-making belong in a dedicated hook.
   - The `tsx` should import and call the hook and then render using the hook outputs.
2. Hook file constraints:
   - The hook file should contain only the hook implementation (the hook function and its necessary imports).
   - If there is pure logic that can be extracted without React concerns, move it into a `utils/` directory (see "Directory roles" below) - not into the hook file.
3. Co-locate logic with the component you are extracting:
   - If `CartItem` is extracted from `Cart`, move the relevant logic out of `useCart` into a dedicated `useCartItem` hook (or whichever hook matches the extracted component).
   - The child component should import and use its own hook rather than receiving behavior via props.
4. Avoid prop-drilling logic:
   - Prefer importing the needed hook inside the extracted child component.
   - If the parent passes data, pass only minimal rendering data (typically primitives or domain objects), not behavior/handlers.
5. Keep styles out of hooks:
   - Do not define `className` strings, style objects, or style-selection helpers inside hooks.
   - Prefer defining styles directly on JSX tags in the component file.
   - Hooks should return behavior/data only (state, derived values, handlers, selectors), not presentation styling.

### Hook granularity (do not over-extract)

- Do **not** add a dedicated hook whose sole purpose is to call `useTranslations` (or similar) and return strings/labels with no other state, effects, memoized computation, or event wiring.
- Keep i18n in the component: call `useTranslations` (or your project's i18n hook) directly in the `tsx` where those labels are rendered, unless the same translation bundle is shared across several components and a tiny shared helper (not a "logic hook") is justified.
- A hook is appropriate when it combines translations **with** real behavior (e.g. labels plus handlers, validation messages plus form state, or derived copy from props/data) - not when it only forwards keys to the UI.

## File and directory structure (tree, not flat)

Avoid dumping every `Component.tsx`, `useComponent.ts`, and sibling file into one folder. That flat layout is hard to scan and does not reflect ownership or nesting.

**Bad (flat):** one directory containing `Parent.tsx`, `useParent.ts`, `ChildA.tsx`, `useChildA.ts`, `ChildB.tsx`, `useChildB.ts`, `Grandchild.tsx`, `useGrandchild.ts`, ... all as siblings.

**Good (tree mirrors JSX):** each extracted subtree lives under a subfolder named after the feature or parent slice, with deeper components nested deeper on disk - similar to how they nest in the render tree.

Example layout (illustrative):

```text
cart/
  Cart.tsx
  useCart.ts
  utils/
    format-cart-total.ts
  types/
    cart.ts
  context/
    CartProvider.tsx
  shared/
    cart-badge/
      CartBadge.tsx
      useCartBadge.ts
  cart-items-list/
    CartItemsList.tsx
    useCartItemsList.ts
    cart-item/
      CartItem.tsx
      useCartItem.ts
```

### Per-folder contents (one component + one hook per slice folder)

In any **feature slice folder** (a folder that owns one primary UI component - e.g. `cart/`, `cart/cart-items-list/`):

- Allow exactly one `*.tsx` file that is the React component for that slice.
- Allow exactly one `*.ts` file that is the hook dedicated to that component (e.g. `useCart.ts` for `Cart.tsx`), when a non-trivial hook exists.
- Allow multiple subdirectories, each following the same pattern for a nested child component and its hook.
- Do not pile extra sibling `*.tsx` / `use*.ts` pairs in the same folder - extract another slice into its own subdirectory, or place cross-cutting pieces in the special directories below.

Special directories (`utils/`, `shared/`, `context/`, `types/`) are **not** "slice folders": they follow the rules in "Directory roles," not the one-tsx / one-hook pair rule.

### Directory roles

Use these folders inside a feature module (or at a shared module root) so responsibilities stay obvious:

| Directory  | Purpose                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `utils/`   | Pure functions and helpers with **no** React hooks or JSX - parsing, formatting, guards, mappers, constants that are not types. Anything that does not belong in the component's hook belongs here rather than bloating the hook file.                                                                                                                                                                             |
| `shared/`  | Components (and their dedicated `use*.ts` hooks) reused by **multiple** sibling slices in the same module. Each component in `shared/` still follows the one-tsx / one-hook rule inside its own subfolder if you need more than one shared widget (e.g. `shared/cart-badge/`, `shared/price-tag/`).                                                                                                                |
| `context/` | Providers, context definitions, and thin provider components that wire React context - keep them separate from presentational slice components. Unrelated contexts live in separate subfolders under `context/`; a single context boundary may group its provider `.tsx` with closely related `.ts` files (e.g. context value shape, defaults) in one folder without adding extra presentational components there. |
| `types/`   | TypeScript types, interfaces, and domain model shapes used across the module (no runtime component logic).                                                                                                                                                                                                                                                                                                         |

Rules:

- **Child components** that exist only as descendants of a parent feature should live **inside a subdirectory** of that parent's folder (e.g. `cart/cart-items-list/`), not beside unrelated feature roots.
- Co-locate each component with its hook in the **same leaf folder** when that hook is non-trivial; do not scatter `use*` files all at the top level of a broad module.
- Use **folder names** that match the component domain (kebab-case or the project's convention), not a single long flat list of `ManualFunctionalGaitScores*` files at one depth.
- The **public entry** for a module may re-export from nested paths so imports stay stable; internal structure should still be a tree.

## Before/After example (JSX structure)

### Bad (multiple component nesting levels)

```tsx
export const Cart = () => {
  return (
    <section>
      <CartHeader />
      <CartBody>
        <CartItems>
          <CartItem />
        </CartItems>
      </CartBody>
    </section>
  )
}
```

### Good (single wrapper + one level of components)

```tsx
export const Cart = () => {
  return (
    <section>
      <CartHeader />
      <CartItemsList />
    </section>
  )
}
```

```tsx
export const CartItemsList = () => {
  return (
    <div>
      <CartItems>
        <CartItem />
      </CartItems>
    </div>
  )
}
```

## Before/After example (hook logic + avoid prop drilling)

### Bad (logic passed down as props)

```tsx
export const Cart = () => {
  const cartHandlers = useCartHandlers()
  return <CartItem onAdd={cartHandlers.onAdd} onRemove={cartHandlers.onRemove} />
}
```

### Good (logic moved into the extracted child hook)

```tsx
export const Cart = () => {
  const cartSummary = useCartSummary()
  return <CartItem cartItemId={cartSummary.mainItemId} />
}
```

```tsx
export const CartItem = ({ cartItemId }) => {
  const cartItemActions = useCartItem(cartItemId)
  return (
    <div>
      <button onClick={cartItemActions.onAdd}>{cartItemActions.addLabel}</button>
      <button onClick={cartItemActions.onRemove}>{cartItemActions.removeLabel}</button>
    </div>
  )
}
```

## Output expectations

- When refactoring, make the parent component flat and keep it shallow.
- Introduce/rename extracted component files and corresponding hooks so each extracted component owns its behavior - hooks must earn their file (non-trivial logic); translations-only stays in `tsx` or shared i18n usage as above.
- Import hooks in the most local component that needs the logic.
- Keep hook files dedicated: hook-only content; pure logic lives under `utils/`, shared UI under `shared/`, providers under `context/`, types/models under `types/`.
- Respect one component `.tsx` + one companion hook `.ts` per slice folder, with deeper UI only in child subdirectories.
- **Restructure directories** so the file tree reflects component nesting: nested folders for nested features, not one flat directory of every part of the module.
