import React, { useMemo, type JSX } from "react";
import type { Hero } from "../interfaces/Hero";

import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";

interface HeroListProps {
  publisher: Hero["publisher"];
}

export const HeroList = ({ publisher }: HeroListProps): JSX.Element => {
  const heros = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
