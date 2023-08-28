import { createSlice } from "@reduxjs/toolkit";



  const initial_state ={

     login : false,
     sidebar :false
  }
const E4U_slice =createSlice({
    name :"E4U_slice",
    initialState:initial_state,
    reducers:{
        login:(state)=>{
            state.login = true
            return state
        },
        
            logout : (state)=>{
                state.login = false
                return state
            
        },
        sidebar_show:(state)=>{
            state.sidebar= true
            return state
        },
        sidebar_hide:(state)=>{
            state.sidebar=false
            return state
        }
    }
    
})

export const {login,logout,sidebar_show,sidebar_hide} =E4U_slice.actions
export default E4U_slice.reducer