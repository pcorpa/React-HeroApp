import React, { useReducer, type JSX } from "react";
import type { User } from "../interfaces/User";
import { AuthReducer, AuthContext } from "../context";

interface AuthProvider {
  children: React.ReactNode;
}
const initialState: User = {
  name: "",
  lastName: "",
  password: "",
  username: "",
};

export const AuthProvider = ({ children }: AuthProvider) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  const login = (user: User) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ logged: false, authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
