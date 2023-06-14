import { z } from "zod";
import {
  advertisementSchema,
  advertisementAllSchema,
} from "../schemas/advertisements.schema";

export type Iadvertisement = z.infer<typeof advertisementSchema>;
export type TAdvertisementArray = z.infer<typeof advertisementAllSchema>;

export type IadvertisementStatus ={
    is_active: boolean;
}