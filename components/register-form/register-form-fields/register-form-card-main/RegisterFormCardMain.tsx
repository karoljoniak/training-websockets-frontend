"use client"

import { CardContent } from "@/components/ui/card"

import { RegisterFormConfirmPasswordField } from "./register-form-confirm-password-field/RegisterFormConfirmPasswordField"
import { RegisterFormEmailField } from "./register-form-email-field/RegisterFormEmailField"
import { RegisterFormPasswordField } from "./register-form-password-field/RegisterFormPasswordField"

export function RegisterFormCardMain() {
  return (
    <CardContent className="flex flex-col gap-6">
      <RegisterFormEmailField />
      <RegisterFormPasswordField />
      <RegisterFormConfirmPasswordField />
    </CardContent>
  )
}
