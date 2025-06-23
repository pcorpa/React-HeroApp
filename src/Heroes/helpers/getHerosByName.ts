import { heroes } from "../data/Heroes";
import type { Hero } from "../interfaces/Hero";

  export const getHerosByName = (name: string): Hero[] =>{
    if(name.trim().length == 0) return [];
    
    const filteredHeros = heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));

    return filteredHeros;

}