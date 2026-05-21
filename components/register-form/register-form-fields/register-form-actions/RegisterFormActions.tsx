"use client"

import { useFormContext } from "react-hook-form"

import type { RegisterValues } from "@/components/register-form/types/register-schema"
import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"

export function RegisterFormActions() {
  const {
    formState: { isSubmitting, errors },
  } = useFormContext<RegisterValues>()

  return (
    <CardFooter className="flex flex-col gap-2 border-t pt-4">
      {errors.root?.message ? (
        <p className="text-center text-sm font-medium text-destructive">
          {errors.root.message}
        </p>
      ) : null}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Rejestracja…" : "Zarejestruj się"}
      </Button>
    </CardFooter>
  )
}
