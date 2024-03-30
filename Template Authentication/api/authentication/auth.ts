import axios from "axios";
import { API_KEY } from "@env";

export async function signUp(email: string, password: string) {
  const api =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
    "AIzaSyB_T7cZOltGKh7h6iD45MneFWdj0tq4_bo";

  const response = await axios({
    method: "post",
    url: api,
    data: {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  });

  return {
    token: response.data.idToken,
    refreshToken: response.data.refreshToken,
  };
}

export async function logIn(email: string, password: string) {
  const api =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    "AIzaSyB_T7cZOltGKh7h6iD45MneFWdj0tq4_bo";
  console.log("a");
  const response = await axios({
    method: "post",
    url: api,
    data: {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  });

  return {
    token: response.data.idToken,
    refreshToken: response.data.refreshToken,
  };
}

export async function refreshToken(refreshToken: string) {
  const api = "https://securetoken.googleapis.com/v1/token?key=" + API_KEY;
  const response = await axios({
    method: "post",
    url: api,
    data: {
      refresh_token: refreshToken,
    },
  });

  return {
    token: response.data.id_token,
    refreshToken: response.data.refresh_token,
  };
}

export async function testApi(token: string) {
  const api =
    "https://reactnativeudemy-cd56b-default-rtdb.firebaseio.com/message.json?auth=" +
    token;
  const response = await axios({
    method: "get",
    url: api,
  });

  return response.data;
}
