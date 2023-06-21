import { z } from "zod";
import { ResetPasswordSchema } from "../pages/resetPasswordPage/validator";


export type iResetPassword = z.infer<typeof ResetPasswordSchema>;