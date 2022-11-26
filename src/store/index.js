import {configureStore} from "@reduxjs/toolkit"

import usernameSlice from "./slices/username.slice";
import pokemondetaillSlice from "./slices/pokemondetail.slice.js";

export default configureStore({
    reducer: {
        username: usernameSlice,
        pokemondetaill: pokemondetaillSlice
    }
})
