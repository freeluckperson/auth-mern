//Usamos context para almacenar el usuario en un estado

import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an Auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registerErr, setRegisterErr] = useState(null);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setuser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setRegisterErr(error.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        registerErr,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
