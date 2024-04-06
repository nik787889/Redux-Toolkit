
// // 
import { createSlice } from "@reduxjs/toolkit"




export const cartSlice = createSlice({

    name: "cart",

    initialState: [],

    reducers: {

        addProducts(state, action) {
            // state.push(action.payload)
           return [...state, {...action.payload.cart, quntity:action.payload.quntity}]
        },

        removeProducts(state, action) {
            // return state.filter((item) => item.id !== action.payload)
            return state.filter((item,index) => index !== action.payload)
        }

    },

})


export const { addProducts, removeProducts } = cartSlice.actions
export default cartSlice.reducer