"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { loginSchema, type LoginValues } from "@/components/login-form/types/login-schema"

export function useLoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const onValidSubmit = (values: LoginValues) => {
    void values
    /* integracja z backendem */
  }

  return { form, onValidSubmit }
}
