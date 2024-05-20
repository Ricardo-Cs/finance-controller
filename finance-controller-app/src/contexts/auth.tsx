import { createContext, useEffect, useState } from "react";
import loginUser, { loginData } from "../api/loginUser";
import popUp from "../components/popup/popUp";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true)
      console.log(isLogged);
    }
  }, []);

  const signIn = async (loginData: loginData) => {
    const response = await loginUser(loginData);

    if (!response || response.status !== 200) {
      popUp('error', 'Erro ao fazer login');
      return "Erro";
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