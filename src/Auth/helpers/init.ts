import type { AuthState } from "../interfaces";

export const init = (): AuthState => {
  try {
    const raw = localStorage.getItem("initialState");
    if (!raw) return { logged: false, user: null };

    const parsed = JSON.parse(raw);
    return parsed;
  } catch (error) {
    console.error("Error parsing localStorage 'initialState'", error);
    return { logged: false, user: null };
  }
};