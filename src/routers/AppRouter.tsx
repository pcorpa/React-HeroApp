import { Route, Routes } from "react-router-dom";
import { Login } from "../Auth/pages";

import { HeroesRoutes } from "../Heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
