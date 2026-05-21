import * as z from "zod"

export const registerSchema = z
  .object({
    email: z.email("Podaj poprawny adres email"),
    password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
    confirmPassword: z.string().min(1, "Potwierdź hasło"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła muszą być takie same",
    path: ["confirmPassword"],
  })

export type RegisterValues = z.infer<typeof registerSchema>
