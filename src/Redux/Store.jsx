import { configureStore } from "@reduxjs/toolkit";
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
import { UserReducer } from "./userAuth";

const userPersistConfig={
    key:'user',
    storage:storage
}

const persistedUserReducer = persistReducer(userPersistConfig, UserReducer)

export const Store=configureStore({
    reducer:{
        User:persistedUserReducer,
    }
})

export const persistor=persistStore(Store)