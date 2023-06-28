import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Iadvertisement,
  IadvertisementId,
  IadvertisementStatus,
} from "../interfaces/advertisements.interfaces";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

interface advertisementProviderProps {
  children: React.ReactNode;
}

interface iAdvertisementValues {
  showAddAdvertisementForm: boolean;
  allAdvertisements: Iadvertisement[];
  getAllAdvertisements: () => void;
  advertisementById: any;
  getAdvertisementById: any;
  sellerAdvertisements: Iadvertisement[];
  getSellerAdvertisements: (id: number) => void;
  createAdvertisement: (body: Iadvertisement) => Promise<Iadvertisement>;
  updateAdvertisement: any;
  deleteAdvertisement: any;
  updateAdvertisementStatus: any;
  SetShowAddAdvertisementForm: () => void;
  filteredAd: Iadvertisement[];
  setFilteredAd: Dispatch<SetStateAction<Iadvertisement[]>>;
  showDeleteAdvertisementModal: boolean;
  SetShowDeleteAdvertisementModal: () => void;
  SetShowUpdateAdvertisementForm: () => void;
  showUpdateAdvertisementForm: boolean;
  selectedAd: Iadvertisement | null;
  setSelectedAd: Dispatch<SetStateAction<any | null>>;
  isAdActive: boolean;
  SetIsAdActive: (condition: boolean) => void;
}

export const AdvertisementContext = createContext({} as iAdvertisementValues);

export const AdvertisementProvider = ({
  children,
}: advertisementProviderProps) => {
  const [showAddAdvertisementForm, setShowAddAdvertisementForm] = useState<boolean>(false);

  const [ isAdActive, setIsAdActive] = useState<boolean>(false);

  const SetIsAdActive = (condition: boolean) => {
    setIsAdActive(condition)
  }

  const [allAdvertisements, setAllAdvertisements] = useState<Iadvertisement[]>(
    []
  );

  const [advertisementById, setAdvertisementById] =
    useState<IadvertisementId>();

  const [sellerAdvertisements, setSellerAdvertisements] = useState<
    Iadvertisement[]
  >([]);

  const [selectedAd, setSelectedAd] = useState<Iadvertisement | null>(null);

  const [filteredAd, setFilteredAd] =
    useState<Iadvertisement[]>(allAdvertisements);

  const [showDeleteAdvertisementModal, setShowDeleteAdvertisementModal] =
    useState<boolean>(false);

  const [showUpdateAdvertisementForm, setShowUpdateAdvertisementForm] =
    useState<boolean>(false);

  const SetShowDeleteAdvertisementModal = () => {
    setShowDeleteAdvertisementModal((prevState) => !prevState);
  };

  const SetShowUpdateAdvertisementForm = () => {
    setShowUpdateAdvertisementForm((prevState) => !prevState);
  };

  const SetShowAddAdvertisementForm = () => {
    setShowAddAdvertisementForm((prevState) => !prevState);
  };
  const { userId, id } = useParams();

  useEffect(() => {
    getAllAdvertisements();
    if (userId) {
      getSellerAdvertisements(+userId);
    }
    if (id) {
      getAdvertisementById(+id);
    }
  }, []);


  const navigate = useNavigate();

  const getAllAdvertisements = async () => {
    try {
      const response = await api.get<Iadvertisement[]>("advertisement");
      setAllAdvertisements(response.data);
      setFilteredAd(response.data);
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };

  const getAdvertisementById = async (id: number) => {
    try {
      const response = await api.get<IadvertisementId>(`advertisement/${id}`);

      setAdvertisementById(response.data);
      navigate(`/product-page/${response.data.id}`);
    } catch (error) {
      console.error("Erro ao obter o anuncio", error);
    }
  };

  const getSellerAdvertisements = async (id: number) => {
    try {
      const response = await api.get<Iadvertisement[]>(
        `advertisement/seller/${id}`
      );
      setSellerAdvertisements(response.data);
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };

  const createAdvertisement = async (body: Iadvertisement) => {
    try {
      const jwtToken = localStorage.getItem("@TOKEN");
      if (!jwtToken) return;

      const response = await api.post("advertisement", body, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      toast.success("Anúncio criado com sucesso!", {
        autoClose: 1000,
      });

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error("Erro ao criar anúncio.", {
        autoClose: 1000,
      });
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
        showAddAdvertisementForm,
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
        SetShowAddAdvertisementForm,
        filteredAd,
        setFilteredAd,
        SetShowDeleteAdvertisementModal,
        showDeleteAdvertisementModal,
        SetShowUpdateAdvertisementForm,
        showUpdateAdvertisementForm,
        selectedAd,
        setSelectedAd,
        isAdActive,
        SetIsAdActive
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
