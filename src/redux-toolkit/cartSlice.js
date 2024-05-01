
// // 
import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({

    name: "cart",

    initialState: [],

    reducers: {

        // setCart(state,action){
        //     return 
        // },

        addProducts(state, action) {
            // state.push(action.payload)
           return [...state, {...action.payload.cart, quntity:action.payload.quntity, isProductInCart:action.payload.isProductInCart}] ;
        },

        updateProducts(state, action){
        //   return [...state, {...action.payload.cart, quntity:action.payload.quntity}]
        return state.filter((item,index) => item.id !== action.payload)
        },

        removeProducts(state, action) {
            // return state.filter((item) => item.id !== action.payload)
            return state.filter((item,index) => index !== action.payload)
        },

        clearCart(state, action){
            return  [] 
        }

    },

})


export const { addProducts, updateProducts, removeProducts, clearCart } = cartSlice.actions
export default cartSlice.reducer