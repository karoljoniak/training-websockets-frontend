"use client"

import { CardContent } from "@/components/ui/card"

import { LoginFormEmailField } from "./login-form-email-field/LoginFormEmailField"
import { LoginFormPasswordField } from "./login-form-password-field/LoginFormPasswordField"
import { LoginFormRememberField } from "./login-form-remember-field/LoginFormRememberField"

export function LoginFormCardMain() {
  return (
    <CardContent className="flex flex-col gap-6">
      <LoginFormEmailField />
      <LoginFormPasswordField />
      <LoginFormRememberField />
    </CardContent>
  )
}
