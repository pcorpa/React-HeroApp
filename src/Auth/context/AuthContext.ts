import { createContext } from "react";
import type { User } from "../interfaces/User";

interface AuthContextType 
  {
      logged: boolean;
      authState: User | null;
      login: (user: User) => void;
      logout: () => void;
    }
  

export const AuthContext = createContext<AuthContextType>({
  logged: false,
  authState: null,
  login: (user) => {
    return;
  },
  logout: () => {},
});
