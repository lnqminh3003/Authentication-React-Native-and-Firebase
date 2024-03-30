import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import LoadingLayout from "../components/login+register/LoadingLayout";

function HomeSmartScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function logOutHandler() {
    setIsAuthenticating(true);
	
    signOut(auth)
      .then(() => {
        setIsAuthenticating(false)
      })
      .catch((error) => {
        // An error happened.
      });
  }

  if(isAuthenticating) return <LoadingLayout />

  return (
    <View style={styles.homeScreenContainer}>
      <Text>HOME SCREEN</Text>
      <Button title="Log out" onPress={logOutHandler} />
    </View>
  );
}

export default HomeSmartScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
