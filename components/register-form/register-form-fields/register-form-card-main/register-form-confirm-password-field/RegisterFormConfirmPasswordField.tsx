"use client"

import type { ControllerRenderProps } from "react-hook-form"
import { useFormContext } from "react-hook-form"

import type { RegisterValues } from "@/components/register-form/types/register-schema"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

function RegisterFormConfirmPasswordFieldBody({
  field,
}: {
  field: ControllerRenderProps<RegisterValues, "confirmPassword">
}) {
  return (
    <FormItem>
      <FormLabel>Potwierdź hasło</FormLabel>
      <FormControl>
        <Input
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export function RegisterFormConfirmPasswordField() {
  const { control } = useFormContext<RegisterValues>()
  return (
    <FormField
      control={control}
      name="confirmPassword"
      render={({ field }) => (
        <RegisterFormConfirmPasswordFieldBody field={field} />
      )}
    />
  )
}
