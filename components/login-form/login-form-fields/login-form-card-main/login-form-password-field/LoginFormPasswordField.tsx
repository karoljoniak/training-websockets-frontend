"use client"

import type { ControllerRenderProps } from "react-hook-form"
import { useFormContext } from "react-hook-form"

import type { LoginValues } from "@/components/login-form/types/login-schema"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

function LoginFormPasswordFieldBody({
  field,
}: {
  field: ControllerRenderProps<LoginValues, "password">
}) {
  return (
    <FormItem>
      <FormLabel>Hasło</FormLabel>
      <FormControl>
        <Input
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export function LoginFormPasswordField() {
  const { control } = useFormContext<LoginValues>()
  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => <LoginFormPasswordFieldBody field={field} />}
    />
  )
}
