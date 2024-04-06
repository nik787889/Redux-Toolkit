
import { configureStore } from "@reduxjs/toolkit"
import cartsReducer from './cartSlice';
import productReducer from './productSlice'
import filterReducer from "./filterSlice";
import selectCartReducer from "./selectCartSlice";

const store = configureStore({
    reducer: {
        cart: cartsReducer,
        product: productReducer,
        filter:filterReducer,
        selectCart:selectCartReducer
    }
})

export default store
