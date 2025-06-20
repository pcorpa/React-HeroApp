import { Navigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { HeroCard } from "../components";
import type { Hero } from "../interfaces/Hero";

export const HeroPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={"/marvel"} />;
  }

  const hero: Hero = getHeroesById(id);

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <>
      <h1>Hero</h1>
      <p>{id}</p>
      <HeroCard {...hero} />
    </>
  );
};
