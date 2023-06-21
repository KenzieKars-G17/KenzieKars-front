import { z } from "zod";

export const ResetPasswordSchema = z.object({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirm: z.string().min(1, "Confirmar a senha é obrigatório")
}).refine(({password,confirm})=> confirm === password,{
    message: "As senhas precisam ser iguais",
    path:["confirm"]
})

