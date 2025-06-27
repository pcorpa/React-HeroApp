import React from "react";
import { useAuth } from "../Auth/Hooks";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const {
    authState: { logged },
  } = useAuth();

  return !logged ? children : <Navigate to={"/"} />;
};
