import { RegisterSchema } from "../schemas/register.schema";
import { z } from "zod";

export type iRegister = z.infer<typeof RegisterSchema>;
