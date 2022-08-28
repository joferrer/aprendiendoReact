import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from "./store/slices/pokemons";

export const PokeApp = () => {
 
    const { page,pokemons, isLoading} = useSelector( state => state.pokemons);

    const dispatch = useDispatch();

    useEffect(() => {
      
        dispatch(getPokemons());
      
    }, [])
    

  return (
    
    <>
        <h1>PokeApp</h1>
        <hr />
        <span>Loading: {isLoading ? 'True': 'False'}</span>

        <ul>
            {pokemons.map(pokemon => <li key={pokemon.name}>{JSON.stringify(pokemon)}</li>)}
        </ul>

        <button disabled={isLoading } onClick={()=>dispatch(getPokemons(page))}>Next</button>
    </>
  )
}
