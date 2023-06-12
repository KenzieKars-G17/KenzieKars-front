import { z } from "zod";
import { userSchema, returnUserSchema } from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
