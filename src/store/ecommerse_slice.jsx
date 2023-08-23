import { createSlice } from "@reduxjs/toolkit";


const E4U_slice =createSlice({
    name :"E4U_slice",
    initialState:false,
    reducers:{
        login:(state)=>{
            state = true
            return state
        }
    }
    
})

export const {login} =E4U_slice.actions
export default E4U_slice.reducer