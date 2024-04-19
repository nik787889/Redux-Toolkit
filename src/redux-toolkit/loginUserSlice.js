
///////////////////////////////

import { createSlice } from "@reduxjs/toolkit";

export const loginUserSlice = createSlice({


    name: 'loginUser',

    initialState: {

        user: null,
        // isUserLoggedin: false
        // favourite: [],

    },

    reducers: {

        loginUser(state, action) {
            state.user = action.payload
        },        

    }

})


export const { loginUser } = loginUserSlice.actions
export default loginUserSlice.reducer