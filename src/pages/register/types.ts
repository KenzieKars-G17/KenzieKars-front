import { RegisterSchema } from "./validator";
import { z } from "zod";

export type tRegister = z.infer<typeof RegisterSchema>;
