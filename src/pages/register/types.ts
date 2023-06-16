import { RegisterSchema } from "../../schemas/register.schema";
import { LoginSchema } from "./validator";
import { z } from "zod";

export type tLogin = z.infer<typeof LoginSchema>;
export type tRegister = z.infer<typeof RegisterSchema>;
