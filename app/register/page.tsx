import type { Metadata } from "next"

import { RegisterPageShell } from "@/components/auth/register-page-shell/RegisterPageShell"

export const metadata: Metadata = {
  title: "Rejestracja",
  description: "Utwórz konto w aplikacji",
}

export default function RegisterPage() {
  return <RegisterPageShell />
}
