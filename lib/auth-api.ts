import { apiBase } from "@/lib/api-base"

/** Nazwa ciasteczka httpOnly ustawianego przez API (informacyjnie; JS i tak go nie odczyta). */
export const AUTH_COOKIE_NAME = "access_token"

export type AuthResponse = {
  user: { id: string; email: string }
}

const fetchAuth: typeof fetch = (input, init) =>
  fetch(input, {
    ...init,
    credentials: "include",
  })

async function parseJson(res: Response): Promise<unknown> {
  try {
    return await res.json()
  } catch {
    return {}
  }
}

function messageFromBody(data: unknown, fallback: string): string {
  if (data && typeof data === "object" && "message" in data) {
    const m = (data as { message: unknown }).message
    if (typeof m === "string") return m
    if (Array.isArray(m)) {
      return m.filter((x): x is string => typeof x === "string").join(" ")
    }
  }
  return fallback
}

export async function authRegister(body: {
  email: string
  password: string
}): Promise<AuthResponse> {
  const res = await fetchAuth(`${apiBase()}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = await parseJson(res)
  if (!res.ok) {
    throw new Error(messageFromBody(data, "Nie udało się zarejestrować"))
  }
  return data as AuthResponse
}

export async function authLogin(body: {
  email: string
  password: string
  remember: boolean
}): Promise<AuthResponse> {
  const res = await fetchAuth(`${apiBase()}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
      remember: body.remember,
    }),
  })
  const data = await parseJson(res)
  if (!res.ok) {
    throw new Error(messageFromBody(data, "Nie udało się zalogować"))
  }
  return data as AuthResponse
}
