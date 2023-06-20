import { IUserReturn } from "../interfaces/user.interface";
import { iLogin } from "../interfaces/login.interfaces";
import { iRegister } from "../interfaces/register.interfaces";

import { useNavigate } from "react-router-dom";
import api from "../services/api";

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
  login: (data: iLogin) => Promise<void>;
  registerUser: (data: iRegister) => Promise<void>;
  setUser: Dispatch<SetStateAction<IUserReturn | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as iContextValues);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUserReturn | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
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

    loadUser();
  }, []);

  const login = async (data: iLogin) => {
    try {
      const resp = await api.post("login", data);
      const { token } = resp.data;
      setLoading(true);
      localStorage.setItem("@TOKEN", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const registerUser = async (data: iRegister) => {

    console.log(data)
    
    try {
      const resp = await api.post("users", data);
      const { token } = resp.data;

      localStorage.setItem("@TOKEN", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, registerUser, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
