"use client"

import { useFormContext } from "react-hook-form"

import type { LoginValues } from "@/components/login-form/types/login-schema"

import { LoginFormActions } from "./login-form-actions/LoginFormActions"
import { LoginFormCardMain } from "./login-form-card-main/LoginFormCardMain"

type LoginFormFieldsProps = {
  onValidSubmit: (values: LoginValues) => void
}

export function LoginFormFields({ onValidSubmit }: LoginFormFieldsProps) {
  const { handleSubmit } = useFormContext<LoginValues>()
  return (
    <form onSubmit={handleSubmit(onValidSubmit)} className="contents">
      <LoginFormCardMain />
      <LoginFormActions />
    </form>
  )
}
