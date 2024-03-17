import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";

import NavigateButton from "../components/login+register/NavigateButton";
import FormInput from "../components/login+register/FormInput";
import ButtonConfirm from "../components/login+register/ButtonConfirm";
import LoadingLayout from "../components/login+register/LoadingLayout";
import { logIn } from "../api/authentication/auth";
import { useAppDispatch } from "../redux store/hook";
import { authenticate } from "../redux store/authSlice";

function LoginScreen({ navigation }: any) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const dispatch = useAppDispatch();

  function navigateToSignUpScreen() {
    navigation.navigate("SignUp");
  }
  function onChangeTextHandler(text: string, signal: string) {
    if (signal == "Email") {
      setEnteredEmail(text);
    } else if (signal == "Password") {
      setEnteredPassword(text);
    }
  }
  function submitHandler() {
    let email = enteredEmail;
    let password = enteredPassword;

    email.trim();
    password.trim();

    const regexp = new RegExp(
      "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
    );
    const isValidEmail = regexp.test(email);
    const isValidPassword = password.length > 6;

    if (!isValidEmail) {
      Alert.alert("LOGIN FAILED", "Please enter a valid email");
      return;
    } else if (!isValidPassword) {
      Alert.alert("LOGIN FAILED", "Please enter a long password");
      return;
    }

    loginUser(email, password);
  }

  async function loginUser(email: string, password: string) {
    setIsAuthenticating(true);
    try {
      const response = await logIn(email, password);
      dispatch(
        authenticate({
          token: response.token,
          refreshToken: response.refreshToken,
        })
      );
    } catch (error) {
      Alert.alert("LOGIN FAILED", "Please login again");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingLayout message="SIGN IN ..." />;
  }

  return (
    <View style={styles.loginScreenContainer}>
      <Text style={styles.title}>WELCOME BACK</Text>

      <FormInput
        title="Email"
        placeholder="ex: minh@gmail.com"
        secure={false}
        onChangeText={(text: any) => onChangeTextHandler(text, "Email")}
      />
      <FormInput
        title="Password"
        placeholder="Enter your password"
        secure={true}
        onChangeText={(text: any) => onChangeTextHandler(text, "Password")}
      />

      <ButtonConfirm isLogin={true} onPress={submitHandler} />
      <NavigateButton onPress={navigateToSignUpScreen} isLogin={true} />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    paddingTop: "55%",
    paddingHorizontal: "3%",
  },
  title: {
    fontWeight: "700",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 32,
  },
});
