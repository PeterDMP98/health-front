import { createSlice } from "@reduxjs/toolkit";

const verifyUserSlice = createSlice({
    name:'user',
    initialState: '',
    reducers:{
        setUser:(state, action) => action.payload,
        setPassword:(state, action) => action.payload,

    }
})

export const {setUser, setPassword} = verifyUserSlice.actions

export default verifyUserSlice.reducer