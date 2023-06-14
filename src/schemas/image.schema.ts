import { z } from "zod";
export const imageSchema = z.object({
  id: z.number(),
  image: z.string().max(250),
});

export const imageSchemaReq = z.object({
  image: z.string().max(250),
});
export const imageSchemaArray = imageSchema.array();
