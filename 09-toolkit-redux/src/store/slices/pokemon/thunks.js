import { pokemonApi } from "../../../api/pokemoApi";
import { setPokemons, startLoadignPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0) => {
    return async ( distpach, getState ) => {
        distpach( startLoadignPokemons() );
        
        // TODO: Realizar peticion http

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);


        distpach(setPokemons({pokemons: data.results, page: page + 1 }));
    }

}

