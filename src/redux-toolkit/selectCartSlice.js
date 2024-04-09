
///////////////////////////////

import { createSlice } from "@reduxjs/toolkit";

export const selectCartSlice = createSlice({


    name: 'selectCart',

    initialState: {

        cartItem: [],
        // updateItem: [],
        isSelectCart: false

    },

    reducers: {

        selectCart(state, action) {
            state.cartItem = action.payload
        },

        updateCart(state, action) {
            state.cartItem = action.payload
            // console.log(action.payload);
        },

        isSelectCart(state,action){
            state.isSelectCart = action.payload
        },

        

    }

})


export const { selectCart, updateCart, isSelectCart,updateItem } = selectCartSlice.actions
export default selectCartSlice.reducer