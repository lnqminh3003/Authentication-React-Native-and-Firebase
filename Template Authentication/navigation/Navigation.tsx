import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeSmartScreen from "../screens/HomeSmartScreen";
import { Colors } from "../constants/styles";
import { useAppDispatch, useAppSelector } from "../redux store/hook";
import { authenticate } from "../redux store/authSlice";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        contentStyle: { backgroundColor: Colors.primary200 },
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeSmart"
        component={HomeSmartScreen}
        options={{ title: "Smart Home" }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function getToken() {
    setIsLoading(true);

    let tokenResult = await SecureStore.getItemAsync("token");
    let refreshTokenResult = await SecureStore.getItemAsync("refreshToken");
    if (tokenResult != "" && refreshTokenResult != "") {
      dispatch(
        authenticate({ token: tokenResult, refreshToken: refreshTokenResult })
      );
    } else {
      console.log("No value stored under that key");
    }

    setIsLoading(false);
    await SplashScreen.hideAsync();
  }
  useEffect(() => {
    getToken();
  }, []);

  if (isLoading) return null;
  return (
    <NavigationContainer>
      {token == "" ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default Navigation;

const styles = StyleSheet.create({});
