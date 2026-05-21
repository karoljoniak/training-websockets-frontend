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

function RegisterFormPasswordFieldBody({
  field,
}: {
  field: ControllerRenderProps<RegisterValues, "password">
}) {
  return (
    <FormItem>
      <FormLabel>Hasło</FormLabel>
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

export function RegisterFormPasswordField() {
  const { control } = useFormContext<RegisterValues>()
  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => <RegisterFormPasswordFieldBody field={field} />}
    />
  )
}
