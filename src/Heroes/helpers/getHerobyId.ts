import { heroes } from "../data/Heroes";
import type { Hero } from "../interfaces/Hero";

export const getHeroesById = (id: string): Hero => {
  const hero = heroes.filter((hero) => hero.id === id)[0];
  return hero;
};
