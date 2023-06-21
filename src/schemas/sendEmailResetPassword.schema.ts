import { z } from "zod";

export const SendEmailResetPasswordSchema = z.object({
    email: z.string().email("Deve ser um e-mail")
})

