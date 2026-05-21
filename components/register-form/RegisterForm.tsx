"use client"

import { Card } from "@/components/ui/card"
import { Form } from "@/components/ui/form"

import { RegisterFormFields } from "./register-form-fields/RegisterFormFields"
import { RegisterFormHeader } from "./register-form-header/RegisterFormHeader"
import { useRegisterForm } from "./useRegisterForm"

export function RegisterForm() {
  const { form, onValidSubmit } = useRegisterForm()
  return (
    <Card className="w-full max-w-sm shadow-sm">
      <RegisterFormHeader />
      <Form {...form}>
        <RegisterFormFields onValidSubmit={onValidSubmit} />
      </Form>
    </Card>
  )
}
