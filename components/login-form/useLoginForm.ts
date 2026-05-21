"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { loginSchema, type LoginValues } from "@/components/login-form/types/login-schema"
import { authLogin } from "@/lib/auth-api"

export function useLoginForm() {
  const router = useRouter()
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const onValidSubmit = async (values: LoginValues) => {
    form.clearErrors("root")
    try {
      await authLogin({
        email: values.email,
        password: values.password,
        remember: values.remember,
      })
      router.replace("/dashboard")
    } catch (e) {
      form.setError("root", {
        message: e instanceof Error ? e.message : "Nie udało się zalogować",
      })
    }
  }

  return { form, onValidSubmit }
}
