import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_T7cZOltGKh7h6iD45MneFWdj0tq4_bo",
    authDomain: "reactnativeudemy-cd56b.firebaseapp.com",
    databaseURL: "https://reactnativeudemy-cd56b-default-rtdb.firebaseio.com",
    projectId: "reactnativeudemy-cd56b",
    storageBucket: "reactnativeudemy-cd56b.appspot.com",
    messagingSenderId: "348483470886",
    appId: "1:348483470886:web:ac52c6deb045ec70dc08e7"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
