import { heroes } from "../data/heros";

export const getHerosByName =( name ='')=>{

    name = name.toLowerCase().trim();

    if( name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLowerCase().trim().includes(name)
    );

}