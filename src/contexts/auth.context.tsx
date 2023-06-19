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
}

export const AuthContext = createContext({} as iContextValues);

export const AuthProvider = ({ children }: iAuthProviderProps) => {

  const [user, setUser] = useState<IUserReturn | null>(null);

  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      console.log(error);
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
    <AuthContext.Provider value={{ user, setUser, login, registerUser}}>

      {children}
    </AuthContext.Provider>
  );
};
