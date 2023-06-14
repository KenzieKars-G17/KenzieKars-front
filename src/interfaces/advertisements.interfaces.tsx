export interface Iadvertisement{
    id: number;
    brand: string;
    model: string;
    fuel: string;
    mileage: string;
    color: string;
    table_price: number;
    price: number;
    cover_image: string;
    is_active: boolean;
}

export type IadvertisementStatus ={
    is_active: boolean;
}