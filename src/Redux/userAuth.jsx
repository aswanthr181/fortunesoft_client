import { createSlice } from "@reduxjs/toolkit";
const token="fs1234"
export const UserAuth = createSlice({
    name: "client",
    initialState: {
        Token:null, // Get token from localStorage or set default
    },
    reducers: {

    },
});

export const {  } = UserAuth.actions;
export const UserReducer = UserAuth.reducer;
