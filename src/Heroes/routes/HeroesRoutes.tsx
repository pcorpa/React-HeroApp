import { Navigate, Route, Routes } from "react-router-dom";
import { DC, HeroPage, Marvel, Search } from "../pages";
import { Login } from "../../Auth/pages";
import { Navbar } from "../../ui/components";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<DC />} />
          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
