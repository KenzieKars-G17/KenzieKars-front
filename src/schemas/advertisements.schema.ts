import { z } from "zod";
export const advertisementSchema = z.object({
    id: z.number(),
    brand: z.string().min(3).max(125),
    model: z.string().max(125),
    fuel: z.string().max(125),
    mileage: z.string().max(45),
    color: z.string().max(45),
    description: z.string().max(45),
    year: z.string().max(4),
    table_price: z.number(),
    price: z.number(),
    is_active: z.boolean().optional().default(true),
    cover_image: z.string(),
});
