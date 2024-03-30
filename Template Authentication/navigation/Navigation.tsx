import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeSmartScreen from "../screens/HomeSmartScreen";

import { Colors } from "../constants/styles";
import { useAppDispatch, useAppSelector } from "../redux store/hook";
import { authenticate, logOut } from "../redux store/authSlice";
import LoadingLayout from "../components/login+register/LoadingLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase";

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
  const uid = useAppSelector((state) => state.auth.uid);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // await getDataFromDatabase();

        dispatch(authenticate({ uid: user.uid }));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        dispatch(logOut());
        console.log("No user yet");
      }
    });
  }, [uid]);

  if (isLoading) return <LoadingLayout />;
  return (
    <NavigationContainer>
      {uid == "" ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default Navigation;
