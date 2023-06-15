import { LoginSchema } from "./validator";
import { z } from "zod";

export type tLogin = z.infer<typeof LoginSchema>;
