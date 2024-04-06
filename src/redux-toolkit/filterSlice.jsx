
import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({

    name: "filter",

    initialState: {
        filterData: [],
        isProduct: true
    },

    reducers: {

        allProducts(state, action) {
            state.filterData = action.payload
        },

        isProduct(state, action) {
            state.isProduct = action.payload
        }

    }

})




export const { allProducts, isProduct } = filterSlice.actions
export default filterSlice.reducer