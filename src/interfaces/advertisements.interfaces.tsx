import { z } from "zod";
import { advertisementSchema } from "../schemas/advertisements.schema";

export type Iadvertisement = z.infer<typeof advertisementSchema>