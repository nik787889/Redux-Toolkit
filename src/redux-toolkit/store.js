
import { configureStore } from "@reduxjs/toolkit"
import cartsReducer from './cartSlice';
import productReducer from './productSlice'
import filterReducer from "./filterSlice";
import selectCartReducer from "./selectCartSlice";

// // "persist"
import { combineReducers } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage
}

const reducers = combineReducers({
    cart: cartsReducer,
    product: productReducer,
    filter:filterReducer,
    selectCart:selectCartReducer
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
