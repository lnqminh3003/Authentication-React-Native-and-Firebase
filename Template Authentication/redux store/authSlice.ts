import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

async function save(token: any, refreshToken: any) {
  await SecureStore.setItemAsync("token", token);
  await SecureStore.setItemAsync("refreshToken", refreshToken);
}

export interface AuthState {
  token: string;
  refreshToken: string;
}

const initialState: AuthState = {
  token: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      console.log(state.token);
      console.log(state.refreshToken);
      save(state.token,state.refreshToken)
    },
    logOut: (state) => {
      state.token = "";
      state.refreshToken = "";
      console.log(state.token);
      console.log(state.refreshToken);
      save("","")
    },
  },
});

export const { authenticate, logOut } = authSlice.actions;

export default authSlice.reducer;
