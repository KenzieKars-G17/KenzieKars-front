import React from "react";
import { AuthContext } from "../contexts/auth.context";

export const useAuth = () => {
  const authContext = React.useContext(AuthContext);
  return authContext;
};
