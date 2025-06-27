import type { Action, AuthState } from "../interfaces";

export const AuthReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        logged: true,
      };
      break;
    case "LOGOUT":
      return {
        user: null,
        logged: false,
      };
      break;

    default:
      return state;
  }
};
