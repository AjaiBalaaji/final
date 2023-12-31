// import { createSlice } from '@reduxjs/toolkit'
// export const UserSlice = createSlice( {
//   name:"user",
//   initialState:{
//     user:{
//         user:'fhgh'
//     },
//   },
//   reducers: {
//     login:(state,action)=>{
//         state.user=action.payload;
//     },
//     logout: (state)=>{
//         state.user=null;
//     },
//   },
// })

// export const {login,logout}=UserSlice.actions;
// export const selectUser=(state)=>state.user.user;
// export default UserSlice.reducer;

// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Holds the user data when logged in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // Action payload should contain the user data when logging in
      state.user = action.payload;
    },
    logout: (state) => {
      // Clears the user data when logging out
      state.user = null;
    },
  },
});

// Export the actions generated by createSlice
export const { login, logout } = userSlice.actions;

// Create a selector to get the user data from the state
export const selectUser = (state) => state.user.user;

// Export the user reducer
export default userSlice.reducer;
