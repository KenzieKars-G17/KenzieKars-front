import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Deve ser um e-mail")
    .nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória"),
});
