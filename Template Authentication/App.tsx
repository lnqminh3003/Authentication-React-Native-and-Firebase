import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import Navigation from "./navigation/Navigation";
import { store } from "./redux store/store";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
