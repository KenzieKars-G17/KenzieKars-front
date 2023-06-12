import { createContext, useState } from "react";
import { Iadvertisement } from "../interfaces/advertisements.interfaces";
import api from "../services/api";

interface advertisementProviderProps {
  children: React.ReactNode;
}

export const AdvertisementContext = createContext({} as any);

export const AdvertisementProvider = ({
  children,
}: advertisementProviderProps) => {
  const [advertisements, setAdvertisements] = useState<Iadvertisement[]>([]);

  const getAdvertisements = async () => {
    try {
      const response = await api.get<Iadvertisement[]>("advertisement");
      setAdvertisements(response.data);
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };

  return (
    <AdvertisementContext.Provider
      value={{
        advertisements,
        getAdvertisements,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
