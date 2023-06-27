import { z } from "zod";
import { returnUserAdSchema } from "./user.schema";
import { imageSchemaArray } from "./image.schema";

export const advertisementSchema = z.object({
  id: z.number(),
  brand: z.string().min(3).max(125),
  model: z.string().max(125),
  fuel: z.string().max(125),
  mileage: z.string().max(45),
  color: z.string().max(45),
  description: z.string(),
  year: z.string().max(4),
  table_price:  z.union([z.string(), z.number()]),
  price:  z.union([z.string(), z.number()]),
  is_active: z.boolean().optional().default(true),
  cover_image: z.string(),
});

export const advertisementSchemaId = advertisementSchema.extend({
  id: z.number()
})

export const updateAdvertisementSchema = advertisementSchema.partial()

export const advertisementAllSchema = advertisementSchema
  .extend({ user: returnUserAdSchema, images: imageSchemaArray || [] })
  .partial()
  .array();
