import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   user: null,
//   token: null,
  status: "false",
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => { 
      state.status = "true";
      state.userData = action.payload;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;

