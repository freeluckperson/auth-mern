//Usamos context para almacenar el usuario en un estado

import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an Auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registerErr, setRegisterErr] = useState([]);
  const [loginErr, setLoginErr] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setuser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setRegisterErr(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error) {
      setLoginErr(error.response.data);
    }
  };

  useEffect(() => {
    if (loginErr.length || registerErr.length) {
      const timer = setTimeout(() => {
        setLoginErr([]);
        setRegisterErr([]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loginErr, registerErr]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        registerErr,
        loginErr,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
