
import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({

    name: "filter",

    initialState: {
        filterData: [],
        isProduct: false,
        isSearch:false,
        searchQuery: ""
    },

    reducers: {

        allProducts(state, action) {
            state.filterData = action.payload
        },

        isProduct(state, action) {
            state.isProduct = action.payload
        },

        isSearch(state, action){
            state.isSearch = action.payload
        },

        setSearchQuery(state, action) {
            state.searchQuery = action.payload
          },

    }

})




export const { allProducts, isProduct, isSearch, setSearchQuery } = filterSlice.actions
export default filterSlice.reducer