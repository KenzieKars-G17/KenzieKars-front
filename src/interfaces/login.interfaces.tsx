import { z } from "zod";
import { userLoginSchema } from "../schemas/login.schema";

export type iLogin = z.infer<typeof userLoginSchema>;
