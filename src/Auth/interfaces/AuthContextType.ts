import type { AuthState } from "./AuthState";
import type { User } from "./User";

export interface AuthContextType 
  {
      authState: AuthState
      login: (user: User) => void;
      logout: () => void;
    }