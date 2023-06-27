import { z } from "zod";
import {
  advertisementSchema,
  advertisementAllSchema,
  advertisementSchemaId,
  updateAdvertisementSchema,
} from "../schemas/advertisements.schema";

export type Iadvertisement = z.infer<typeof advertisementSchema>;
export type TAdvertisementArray = z.infer<typeof advertisementAllSchema>;
export type TupdateAdvertisement = z.infer<typeof updateAdvertisementSchema>

export type IadvertisementStatus ={
    is_active: boolean;
}

export type IadvertisementId = z.infer<typeof advertisementSchemaId>