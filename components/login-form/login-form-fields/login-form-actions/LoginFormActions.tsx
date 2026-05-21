"use client"

import { useFormContext } from "react-hook-form"

import type { LoginValues } from "@/components/login-form/types/login-schema"
import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"

export function LoginFormActions() {
  const {
    formState: { isSubmitting, errors },
  } = useFormContext<LoginValues>()

  return (
    <CardFooter className="flex flex-col gap-2 border-t pt-4">
      {errors.root?.message ? (
        <p className="text-center text-sm font-medium text-destructive">
          {errors.root.message}
        </p>
      ) : null}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Logowanie…" : "Zaloguj się"}
      </Button>
    </CardFooter>
  )
}
