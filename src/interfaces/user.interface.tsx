import { z } from "zod";
import { userSchema, returnUserSchema, userIdSchema } from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
export type IuserId = z.infer<typeof userIdSchema>
