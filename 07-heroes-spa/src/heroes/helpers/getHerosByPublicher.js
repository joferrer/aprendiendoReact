import {  heroes } from "../data/heros";

export const getHerosByPublicher = (publicher)=>{

    const publichers = ['DC Comics','Marvel Comics'];

    if(!publichers.includes(publicher)){
        throw new Error(`${publicher} is not in our publichers list.`)
    }

    return heroes.filter( hero=> hero.publisher === publicher );

}