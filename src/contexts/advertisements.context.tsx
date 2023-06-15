import { createContext, useEffect, useState } from "react";
import {
  Iadvertisement,
  IadvertisementStatus,
} from "../interfaces/advertisements.interfaces";
import api from "../services/api";

interface advertisementProviderProps {
  children: React.ReactNode;
}

interface iAdvertisementValues {
  allAdvertisements: Iadvertisement[];
  getAllAdvertisements: () => void;
  advertisementById: any;
  getAdvertisementById: any;
  sellerAdvertisements: Iadvertisement[];
  getSellerAdvertisements: () => void;
  createAdvertisement: any;
  updateAdvertisement: any;
  deleteAdvertisement: any;
  updateAdvertisementStatus: any;
}

export const AdvertisementContext = createContext({} as iAdvertisementValues);

export const AdvertisementProvider = ({
  children,
}: advertisementProviderProps) => {
  const [allAdvertisements, setAllAdvertisements] = useState<Iadvertisement[]>(
    []
  );

  const [advertisementById, setAdvertisementById] = useState<Iadvertisement>();

  const [sellerAdvertisements, setSellerAdvertisements] = useState<
    Iadvertisement[]
  >([]);

  useEffect(() => {
    getAllAdvertisements();
    getSellerAdvertisements();
  }, []);

  const getAllAdvertisements = async () => {
    try {
      const response = await api.get<Iadvertisement[]>("advertisement");
      setAllAdvertisements(response.data);
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };

  const getAdvertisementById = async (id: number) => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      const response = await api.get<Iadvertisement>(`advertisement/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setAdvertisementById(response.data);
    } catch (error) {
      console.error("Erro ao obter o anuncio", error);
    }
  };

  const getSellerAdvertisements = async () => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      const response = await api.get<Iadvertisement[]>(`advertisement/seller`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setSellerAdvertisements(response.data);
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };

  const createAdvertisement = async (body: any) => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      const response = await api.post("advertisement", body, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar o anuncio", error);
    }
  };

  const updateAdvertisement = async (id: number, body: any) => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      const response = await api.patch<Iadvertisement>(
        `advertisement/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar o anuncio", error);
    }
  };

  const updateAdvertisementStatus = async (
    id: number,
    body: IadvertisementStatus
  ) => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      const response = await api.patch<IadvertisementStatus>(
        `advertisement/status/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar status do anuncio", error);
    }
  };

  const deleteAdvertisement = async (id: number) => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      await api.delete(`advertisement/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
    } catch (error) {
      console.error("Erro ao deletar o anuncio", error);
    }
  };

  return (
    <AdvertisementContext.Provider
      value={{
        allAdvertisements,
        getAllAdvertisements,
        advertisementById,
        getAdvertisementById,
        sellerAdvertisements,
        getSellerAdvertisements,
        createAdvertisement,
        updateAdvertisement,
        updateAdvertisementStatus,
        deleteAdvertisement,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
