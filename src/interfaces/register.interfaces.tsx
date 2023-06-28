import { AddressSchema, EditRegisterSchema, RegisterSchema } from "../schemas/register.schema";
import { z } from "zod";

export type iRegister = z.infer<typeof RegisterSchema>;
export type iEditRegister = z.infer<typeof EditRegisterSchema>;
export type iEditAddress = z.infer<typeof AddressSchema>;
