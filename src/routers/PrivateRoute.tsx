import React from "react";
import { useAuth } from "../Auth/Hooks";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const {
    authState: { logged },
  } = useAuth();

  return logged ? children : <Navigate to={"/login"} />;
};
