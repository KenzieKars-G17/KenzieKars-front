import { z } from "zod";
import { SendEmailResetPasswordSchema } from "../schemas/sendEmailResetPassword.schema";

export type iSendEmailResetPassword = z.infer<typeof SendEmailResetPasswordSchema>;
