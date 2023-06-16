import { z } from "zod";

export const RegisterSchema = z.object({
  email: z
    .string()
    .email({ message: "Must be a valid email" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .nonempty({ message: "Please enter your password" }),
});
