import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  signup: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    signupstate: (state, action) => {
      state.signup = action.payload;
    },
  },
});

export const { login, logout, signupstate } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectSignupState = (state) => state.user.signup;

export default userSlice.reducer;
