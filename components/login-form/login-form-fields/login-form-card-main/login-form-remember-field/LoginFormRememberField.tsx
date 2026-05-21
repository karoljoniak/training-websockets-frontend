"use client"

import type { ControllerRenderProps } from "react-hook-form"
import { useFormContext } from "react-hook-form"

import type { LoginValues } from "@/components/login-form/types/login-schema"
import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

function LoginFormRememberFieldBody({
  field,
}: {
  field: ControllerRenderProps<LoginValues, "remember">
}) {
  return (
    <FormItem className="flex flex-row items-center gap-2 space-y-0">
      <FormControl>
        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
      <FormLabel className="font-normal">Zapamiętaj mnie</FormLabel>
    </FormItem>
  )
}

export function LoginFormRememberField() {
  const { control } = useFormContext<LoginValues>()
  return (
    <FormField
      control={control}
      name="remember"
      render={({ field }) => <LoginFormRememberFieldBody field={field} />}
    />
  )
}
