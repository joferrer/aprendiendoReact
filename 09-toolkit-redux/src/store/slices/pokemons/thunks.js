import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const getPokemons = ( page= 0 ) => {
  
    return async ( dispatch, getState )=>{
        dispatch(startLoadingPokemons());

        
        const URL = `/pokemon?limit=10&offset=${ page * 10}`;
        // const resp = await fetch(URL);
        // const data = await resp.json();
        const {data} = await pokemonApi.get(URL);


        dispatch(setPokemons({pokemons: data.results, page: page + 1 }));
    }
}
