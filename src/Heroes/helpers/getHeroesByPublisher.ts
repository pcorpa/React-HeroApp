import { heroes } from "../data/Heroes";
import type { Hero } from "../interfaces/Hero";

export const getHeroesByPublisher = (publisher: string): Hero[] => {
  const herosByPublisher = heroes.filter((hero) => hero.publisher === publisher);
  return herosByPublisher;
};
