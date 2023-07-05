import { z } from "zod";
import ResetPasswordSchema from "../schemas/resetPassword.schema";

export type iResetPassword = z.infer<typeof ResetPasswordSchema>;
