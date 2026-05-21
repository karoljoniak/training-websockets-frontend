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

function LoginFormEmailFieldBody({
  field,
}: {
  field: ControllerRenderProps<LoginValues, "email">
}) {
  return (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input
          type="email"
          autoComplete="email"
          placeholder="jan@example.com"
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export function LoginFormEmailField() {
  const { control } = useFormContext<LoginValues>()
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => <LoginFormEmailFieldBody field={field} />}
    />
  )
}
