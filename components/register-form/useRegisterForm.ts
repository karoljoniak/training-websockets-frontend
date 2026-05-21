"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  registerSchema,
  type RegisterValues,
} from "@/components/register-form/types/register-schema"

export function useRegisterForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onValidSubmit = (values: RegisterValues) => {
    void values
    /* integracja z backendem */
  }

  return { form, onValidSubmit }
}
