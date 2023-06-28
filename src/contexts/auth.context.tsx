import { IUserReturn } from "../interfaces/user.interface";
import { iLogin } from "../interfaces/login.interfaces";
import {
  iEditAddress,
  iEditRegister,
  iRegister,
} from "../interfaces/register.interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import jwt_decode from "jwt-decode";

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface iAuthProviderProps {
  children: ReactNode;
}

interface iContextValues {
  user: IUserReturn | null;
  advertiser: boolean;
  SetAdvertiser: (condition: boolean) => void;
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
  registerUser: (data: iRegister) => Promise<void>;
  editUser: (data: iEditRegister) => Promise<void>;
  editUserAddress: (data: iEditAddress) => Promise<void>;
  setUser: Dispatch<SetStateAction<IUserReturn | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  sendEmailResetPassword: any;
  showFormEditUserInfo: boolean;
  SetShowFormEditUserInfo: () => void;
  showFormEditUserAddress: boolean;
  SetShowFormEditUserAddress: () => void;
  deleteUser: (id:number)=> void;
}

export const AuthContext = createContext({} as iContextValues);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [advertiser, setAdvertiser] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUserReturn | null>(null);
  const [showFormEditUserInfo, setShowFormEditUserInfo] = useState(false);
  const [showFormEditUserAddress, setShowFormEditUserAddress] = useState(false);

  const thisUser: any = user;

  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("@TOKEN");

      if (!jwtToken) return;
      const decode: any = jwt_decode(jwtToken);
      const findUser = await api.get(`users/${decode.sub}`);

      setUser(findUser.data);
      if(user){
        setAdvertiser(user?.seller);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const SetAdvertiser = (condition: boolean) => {
    setAdvertiser(condition);
  };

  const login = async (data: iLogin) => {
    try {
      const resp = await api.post("login", data);
      const { token } = resp.data;
      const decode: any = jwt_decode(token);
      setLoading(true);
      localStorage.setItem("@TOKEN", token);
      const findUser = await api.get(`users/${decode.sub}`);

      setUser(findUser.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  const registerUser = async (data: iRegister) => {
    data.seller = advertiser;

    try {
      const resp = await api.post("users", data);

      if (resp.status === 201) {
        toast.success("Cadastro efetuado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error("Ops, alguma coisa deu errado!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado!");
    }
  };

  const editUser = async (data: any) => {
    if (data.email === user?.email) {
      delete data.email;
    }

    data.seller = advertiser;

    const jwtToken = localStorage.getItem("@TOKEN");

    try {
      const resp = await api.patch(`users/${thisUser.id}`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (resp.status === 200) {
        toast.success("Cadastro editado com sucesso!");
        setTimeout(() => {
          SetShowFormEditUserInfo();
        }, 2000);
        loadUser();
      } else {
        toast.error("Ops, alguma coisa deu errado!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado!");
    }

    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("@TOKEN");

      if (!jwtToken) return;

      const findUser = await api.get("users", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      setUser(findUser.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const editUserAddress = async (data: iEditAddress) => {
    const jwtToken = localStorage.getItem("@TOKEN");

    try {
      const resp = await api.patch(`users/${thisUser.id}/address`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (resp.status === 200) {
        toast.success("Endereço editado com sucesso!");
        setTimeout(() => {
          SetShowFormEditUserAddress();
        }, 2000);
        loadUser();
      } else {
        toast.error("Ops, alguma coisa deu errado!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado!");
    }

    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("@TOKEN");

      if (!jwtToken) return;

      loadUser();
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const deleteUser = async (id: number) => {
    const jwtToken = localStorage.getItem("@TOKEN");
    if (!jwtToken) return;

    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        }
      })
      logout()
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmailResetPassword = async (email: string) => {
    try {
      await api.post("users/resetPassword", email);
      toast.success("Email enviado com sucesso!");
    } catch (error) {
      toast.error("Ops, alguma coisa deu errado!");
    }
  };

  const SetShowFormEditUserInfo = () => {
    setShowFormEditUserInfo((prevState) => !prevState);
  };

  const SetShowFormEditUserAddress = () => {
    setShowFormEditUserAddress((prevState) => !prevState);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        registerUser,
        loading,
        setLoading,
        SetAdvertiser,
        advertiser,
        sendEmailResetPassword,
        SetShowFormEditUserInfo,
        showFormEditUserInfo,
        editUser,
        editUserAddress,
        SetShowFormEditUserAddress,
        showFormEditUserAddress,
        deleteUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
