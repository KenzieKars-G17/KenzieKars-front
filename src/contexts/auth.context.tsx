import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { IUserReturn } from "../interfaces/user.interface";
import { iLogin } from "../interfaces/login.interfaces";

interface iAuthProviderProps {
  children: ReactNode;
}

interface iContextValues {
  user: IUserReturn | null;
  login: (data: iLogin) => Promise<void>;
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
      const response = await api.post("login", data);
      const findUser = await api.get("users", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });
      localStorage.setItem("@TOKEN", response.data.token);
      setUser(findUser.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};