import Link from "next/link"

import { LoginForm } from "@/components/login-form/LoginForm"

export function LoginPageShell() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col items-stretch gap-6">
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground">
          Nie masz konta?{" "}
          <Link
            href="/register"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Zarejestruj się
          </Link>
        </p>
      </div>
    </div>
  )
}
