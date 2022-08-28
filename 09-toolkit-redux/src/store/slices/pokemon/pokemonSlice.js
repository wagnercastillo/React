import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0, 
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadignPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            
        }
    }
});

export const { startLoadignPokemons, setPokemons } = pokemonSlice.actions;