import type { User } from "./User";


export type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT"; };