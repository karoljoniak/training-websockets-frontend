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

function RegisterFormEmailFieldBody({
  field,
}: {
  field: ControllerRenderProps<RegisterValues, "email">
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

export function RegisterFormEmailField() {
  const { control } = useFormContext<RegisterValues>()
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => <RegisterFormEmailFieldBody field={field} />}
    />
  )
}
