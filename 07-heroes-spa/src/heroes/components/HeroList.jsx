import { useMemo } from "react";
import { getHerosByPublicher } from "../helpers/getHerosByPublicher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({publicher}) => {

    const heros = useMemo (()=> getHerosByPublicher(publicher),[publicher]);
  
  
    return (
    <>
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heros.map( hero =>  (<HeroCard key={hero.id} {...hero}>  </HeroCard>))
            }
        </div>
    </>
  )
}
