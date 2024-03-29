//Usamos context para almacenar el usuario en un estado

import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  verifyTokenRequest,
} from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an Auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registerErr, setRegisterErr] = useState([]);
  const [loginErr, setLoginErr] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setRegisterErr(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setLoginErr(error.response.data);
    }
  };

  const signOut = async () => {
    try {
      const res = await logoutRequest();
      console.log(res);
      setIsAuthenticated(false);
    } catch (error) {
      console.log("hola mundo");
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

  useEffect(() => {
    (async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setLoading(false);

        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    })();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        signOut,
        user,
        isAuthenticated,
        registerErr,
        loginErr,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
