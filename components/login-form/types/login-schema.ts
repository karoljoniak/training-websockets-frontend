import * as z from "zod"

export const loginSchema = z.object({
  email: z.email("Podaj poprawny adres email"),
  password: z.string().min(1, "Podaj hasło"),
  remember: z.boolean(),
})

export type LoginValues = z.infer<typeof loginSchema>
