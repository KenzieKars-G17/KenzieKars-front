interface model {
  name: string;
}

export interface iData {
  chevrolet: model[];
  citroën: model[];
  fiat: model[];
  ford: model[];
  honda: model[];
  hyundai: model[];
  nissan: model[];
  peugeot: model[];
  renault: model[];
  toyota: model[];
  volkswagen: model[];
}

export interface iCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
