import React, { useReducer, type JSX } from "react";
import type { User } from "../interfaces/User";
import { AuthReducer, AuthContext } from "../context";
import type { AuthState } from "../interfaces";
import { init } from "../helpers";

interface AuthProvider {
  children: React.ReactNode;
}
const initialState: AuthState = {
  logged: false,
  user: null,
};

export const AuthProvider = ({ children }: AuthProvider) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

  const login = (user: User) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
