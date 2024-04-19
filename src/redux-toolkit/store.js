
import { configureStore } from "@reduxjs/toolkit"
import cartsReducer from './cartSlice';
import productReducer from './productSlice'
import filterReducer from "./filterSlice";
import selectCartReducer from "./selectCartSlice";
import loginUserReducer from "./loginUserSlice";

// // "persist"
import { combineReducers } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage
 // Optionally, you can blacklist or whitelist specific reducers or keys to persist
 // blacklist: ['auth'], // Don't persist the 'auth' reducer
 // whitelist: ['settings'], // Only persist the 'settings' reducer

}

const reducers = combineReducers({
    cart: cartsReducer,
    product: productReducer,
    filter:filterReducer,
    selectCart:selectCartReducer,
    users:loginUserReducer
})

const PersistReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    // reducer: {
    //     cart: cartsReducer,
    //     product: productReducer,
    //     filter:filterReducer,
    //     selectCart:selectCartReducer
    // }

    reducer: PersistReducer
})

export default store
