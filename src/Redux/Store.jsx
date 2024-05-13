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
        Users:persistedUserReducer,
    }
})

export const persistor=persistStore(Store)