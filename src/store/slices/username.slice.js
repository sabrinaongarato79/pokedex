import {createSlice} from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
    name: 'username',
    initialState: "",
    reducers: {
        setUsername: (state, action) => {
            return action.payload
        }
    }
});

export const {
    setUsername
} = usernameSlice.actions;

export default usernameSlice.reducer;
