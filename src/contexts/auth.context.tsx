import { IUserReturn } from "../interfaces/user.interface";
import { iLogin } from "../interfaces/login.interfaces";

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
  setUser: Dispatch<SetStateAction<IUserReturn | null>>;
  checkAutorization: () => boolean;
}

export const AuthContext = createContext({} as iContextValues);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [user, setUser] = useState<IUserReturn | null>(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const jwtToken = localStorage.getItem("@TOKEN");
        if (!jwtToken) return;

        const findUser = await api.get("users", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setUser(findUser.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
  }, []);


  const login = async (data: iLogin) => {
    try {
      const resp = await api.post("login", data);
      const { token } = resp.data;

      localStorage.setItem("@TOKEN", token);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkAutorization = () => {
    return isAuthenticated;
  };


  return (
    <AuthContext.Provider value={{ user, setUser, login, checkAutorization}}>
      {children}
    </AuthContext.Provider>
  );
};
