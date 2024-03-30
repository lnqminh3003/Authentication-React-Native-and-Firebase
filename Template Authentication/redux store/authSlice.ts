import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  uid: string
  token: string;
  refreshToken: string;
}

const initialState: AuthState = {
  uid: "",
  token: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<any>) => {
      state.uid = action.payload.uid;
    },
    logOut: (state) => {
      state.uid = "";
    },
  },
});

export const { authenticate, logOut } = authSlice.actions;

export default authSlice.reducer;
