import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import FormInput from "../components/login+register/FormInput";
import ButtonConfirm from "../components/login+register/ButtonConfirm";
import NavigateButton from "../components/login+register/NavigateButton";
import LoadingLayout from "../components/login+register/LoadingLayout";
import { signUp } from "../api/authentication/auth";

function RegisterScreen({ navigation }: any) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function navigateToSignInScreen() {
    navigation.navigate("SignIn");
  }
  function onChangeTextHandler(text: string, signal: string) {
    if (signal == "Email") {
      setEnteredEmail(text);
    } else if (signal == "Password") {
      setEnteredPassword(text);
    } else if (signal == "Confirm") {
      setEnteredConfirmPassword(text);
    }
  }

  function submitHandler() {
    let email = enteredEmail;
    let password = enteredPassword;
    let confirmPassword = enteredConfirmPassword;

    email.trim();
    password.trim();
    confirmPassword.trim();

    const regexp = new RegExp(
      "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
    );
    const isValidEmail = regexp.test(email);
    const isValidPassword = password.length > 6;
    const isConfirmPassword = password == confirmPassword;

    if (!isValidEmail) {
      Alert.alert("SIGN UP FAILED", "Please enter a valid email");
      return;
    } else if (!isValidPassword) {
      Alert.alert("SIGN UP FAILED", "Please enter a long password");
      return;
    } else if (!isConfirmPassword) {
      Alert.alert("SIGN UP FAILED", "Please confirm again your password");
      return;
    }

    register(email, password);
  }

  async function register(email:string, password: string) {
    setIsAuthenticating(true);
    try {
      await signUp(email, password);
      setIsAuthenticating(false);
    } catch (err) {
      setIsAuthenticating(false);
      Alert.alert("SIGN UP FAILED", "Please sign up again");
    }
  }

 if (isAuthenticating) {
    return <LoadingLayout />;
  }

  return (
    <View style={styles.registerScreenContainer}>
      <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>

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
      <FormInput
        title="Confirm password"
        placeholder="Confirm your password"
        secure={true}
        onChangeText={(text: any) => onChangeTextHandler(text, "Confirm")}
      />

      <ButtonConfirm onPress={submitHandler} isLogin={false} />
      <NavigateButton onPress={navigateToSignInScreen} isLogin={false} />
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreenContainer: {
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
