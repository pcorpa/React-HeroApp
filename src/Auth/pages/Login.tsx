import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Login = () => {
  const navigate = useNavigate();
  const { login, authState } = useContext(AuthContext);
  const onLogin = () => {
    login({
      name: "Marcelo",
      lastName: "Chorola",
      password: "123456",
      username: "userChorola",
    });
    navigate("/", { replace: true });
  };

  console.log(authState);
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
