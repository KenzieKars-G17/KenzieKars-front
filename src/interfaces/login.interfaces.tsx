import { LoginSchema } from "../schemas/login.schema";
import { z } from "zod";

export type iLogin = z.infer<typeof LoginSchema>;
