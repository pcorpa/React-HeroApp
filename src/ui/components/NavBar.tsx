import { type JSX } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/Hooks";

export const Navbar = (): JSX.Element => {
  const navigate = useNavigate();
  const { logout, authState } = useAuth();

  const onLogOut = (): void => {
    navigate("login", { replace: true });
    logout();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Hero App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            {authState?.user?.name}
          </span>
          <button onClick={onLogOut} className="nav-item nav-link btn">
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
