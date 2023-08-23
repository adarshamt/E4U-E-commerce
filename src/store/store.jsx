import { configureStore } from "@reduxjs/toolkit";


import E4U_slice from'./ecommerse_slice'


const store = configureStore({
    reducer :{
       E4U_slice: E4U_slice
    }
})
export default store
