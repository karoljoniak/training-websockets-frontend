"use client"

import { Card } from "@/components/ui/card"
import { Form } from "@/components/ui/form"

import { LoginFormFields } from "./login-form-fields/LoginFormFields"
import { LoginFormHeader } from "./login-form-header/LoginFormHeader"
import { useLoginForm } from "./useLoginForm"

export function LoginForm() {
  const { form, onValidSubmit } = useLoginForm()
  return (
    <Card className="w-full max-w-sm shadow-sm">
      <LoginFormHeader />
      <Form {...form}>
        <LoginFormFields onValidSubmit={onValidSubmit} />
      </Form>
    </Card>
  )
}
