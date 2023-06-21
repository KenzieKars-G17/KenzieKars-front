import { z } from "zod";
import { ResetPasswordSchema } from "../schemas/ResetPassword.schema";

export type iResetPassword = z.infer<typeof ResetPasswordSchema>;
