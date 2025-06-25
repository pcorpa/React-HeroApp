import type { Action, User } from "../interfaces";

export const AuthReducer = (state: User, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...action.payload,
        logged: true,
      };
      break;
    case "LOGOUT":
      return {
        name: "",
        lastName: "",
        password: "",
        username: "",
        logged: false,
      };
      break;

    default:
      return state;
  }
};
