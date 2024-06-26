import { createContext, useEffect, useState } from "react";
import loginUser, { loginData } from "../api/loginUser";
import popUp from "../components/popup/popUp";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true)
    }
  }, []);

  const signIn = async (loginData: loginData) => {
    const response = await loginUser(loginData);

    if (!response || response.status !== 200) {
      toast.error("E-mail ou senha incorretos! Tente novamente", {
        autoClose: 3000,
        position: "top-center"
      });
      return;
    }

    localStorage.setItem('token', response.token);
    setIsLogged(true);
  };

  const signOut = () => {
    setIsLogged(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      // value={{ user, signed: !!user, signin, signup, signout }}
      value={{ isLogged, signed: !!isLogged, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};