import {createSlice} from "@reduxjs/toolkit";

export const pokemondetaillSlice = createSlice({
    name: 'pokemondetaill',
    initialState: {},
    reducers: {
        setPokemonDetaill: (state, action) => {
            return action.payload
        }
    }
});

export const {
    setPokemonDetaill
} = pokemondetaillSlice.actions;

export default pokemondetaillSlice.reducer;
