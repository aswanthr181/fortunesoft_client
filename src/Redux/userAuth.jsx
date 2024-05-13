import { createSlice } from "@reduxjs/toolkit";
const token="fs1234"
export const UserAuth = createSlice({
    name: "client",
    initialState: {
        Token:token, // Get token from localStorage or set default
    },
    reducers: {
        TokenUp(state,action){
            state.Token=action.payload.token;
        }
    },
});

export const { TokenUp } = UserAuth.actions;
export const UserReducer = UserAuth.reducer;
