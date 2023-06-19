import { z } from "zod";

const AddressSchema = z.object({
  cep: z.string(),
  city: z.string(),
  state: z.string(),
  street: z.string(),
  number: z.string()
});

const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um e-mail válido"),
  cpf: z.string(),
  phone: z.string(),
  birthdate: z.string(),
  description: z.string(),
  address: AddressSchema,
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
});

export { AddressSchema, RegisterSchema }