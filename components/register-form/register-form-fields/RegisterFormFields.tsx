"use client"

import { useFormContext } from "react-hook-form"

import type { RegisterValues } from "@/components/register-form/types/register-schema"

import { RegisterFormActions } from "./register-form-actions/RegisterFormActions"
import { RegisterFormCardMain } from "./register-form-card-main/RegisterFormCardMain"

type RegisterFormFieldsProps = {
  onValidSubmit: (values: RegisterValues) => void
}

export function RegisterFormFields({ onValidSubmit }: RegisterFormFieldsProps) {
  const { handleSubmit } = useFormContext<RegisterValues>()
  return (
    <form onSubmit={handleSubmit(onValidSubmit)} className="contents">
      <RegisterFormCardMain />
      <RegisterFormActions />
    </form>
  )
}
