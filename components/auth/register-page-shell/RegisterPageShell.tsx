import Link from "next/link"

import { RegisterForm } from "@/components/register-form/RegisterForm"

export function RegisterPageShell() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col items-stretch gap-6">
        <RegisterForm />
        <p className="text-center text-sm text-muted-foreground">
          Masz już konto?{" "}
          <Link
            href="/"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Zaloguj się
          </Link>
        </p>
      </div>
    </div>
  )
}
