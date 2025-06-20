import type { Hero } from "../interfaces/Hero";

export const filterCharacters = (hero: Hero): string[] => {
    const splitCharacters = hero.characters.split(",");
    const filteredCharacters = splitCharacters.filter(
      (char) => char !== hero.alter_ego
    );
    const returnCharacters = filteredCharacters.map((char, i) => {
      
      return i + 1 === filteredCharacters.length ? `${char}.` : `${char},`;
    });
    return returnCharacters;
  };