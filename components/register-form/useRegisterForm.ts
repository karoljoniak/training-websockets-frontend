"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import {
  registerSchema,
  type RegisterValues,
} from "@/components/register-form/types/register-schema"
import { authRegister } from "@/lib/auth-api"

export function useRegisterForm() {
  const router = useRouter()
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onValidSubmit = async (values: RegisterValues) => {
    form.clearErrors("root")
    try {
      await authRegister({
        email: values.email,
        password: values.password,
      })
      router.replace("/dashboard")
    } catch (e) {
      form.setError("root", {
        message:
          e instanceof Error ? e.message : "Nie udało się zarejestrować",
      })
    }
  }

  return { form, onValidSubmit }
}
