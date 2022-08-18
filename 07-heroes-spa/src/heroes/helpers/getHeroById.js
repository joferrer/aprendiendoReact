import { heroes } from "../data/heros"


export const getHeroById = (id)=>{

    return heroes.find(hero => id === hero.id);
}