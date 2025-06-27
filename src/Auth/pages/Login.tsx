import { useNavigate } from "react-router-dom";

import { useAuth } from "../Hooks";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLogin = () => {
    login({
      name: "Pedro",
      lastName: "Correia",
      password: "123456",
      username: "userChorola",
    });
    localStorage.setItem(
      "initialState",
      JSON.stringify({
        logged: true,
        user: {
          name: "Marcelo",
          lastName: "Chorola",
          password: "123456",
          username: "userChorola",
        },
      })
    );
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt- 5">
      <h1 className="color: green">Login Page</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
