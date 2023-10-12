import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  login: false,
  sidebar: false,
  admin_token: false,
  cart_count: 0,
  wishlist_count: 0,
  location: {},
};
const E4U_slice = createSlice({
  name: "E4U_slice",
  initialState: initial_state,
  reducers: {
    login: (state) => {
      state.login = true;
      return state;
    },

    logout: (state) => {
      state.login = false;
      return state;
    },
    sidebar_show: (state) => {
      state.sidebar = true;
      return state;
    },
    sidebar_hide: (state) => {
      state.sidebar = false;
      return state;
    },
    admin_login: (state) => {
      state.admin_token = true;
    },
    admin_logout: (state) => {
      state.admin_token = false;
    },
    cart_counter: (state, action) => {
      const count = action.payload.count;
      state.cart_count = count;
    },
    wishlist_counter: (state, action) => {
      const count = action.payload.count;
      if (count != undefined) {
        state.wishlist_count = count;
      } else {
        state.wishlist_count = 0;
      }
    },
    location_set: (state, action) => {
      state.location = action.payload.lngLat;
      console.log("redux location payload :",action.payload.lngLat)
    },
    location_unset:(state)=>{
        state.location={}
    }
  },
});

export const {
  login,
  logout,
  sidebar_show,
  sidebar_hide,
  cart_counter,
  wishlist_counter,
  location_set,
  location_unset
} = E4U_slice.actions;
export default E4U_slice.reducer;
