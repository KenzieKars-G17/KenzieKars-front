import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  cpf: z.string().max(11),
  phone: z.string().max(9),
  birthdate: z.string().max(10),
  description: z.string().nullable().default(null),
  seller: z.boolean().optional().default(false),
  password: z.string().min(4).max(120),
});

const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

export { userSchema, returnUserSchema };
