import { View, Text, StyleSheet, Pressable } from "react-native";

function NavigateButton({ isLogin, onPress }: any) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {isLogin ? "Don't have an account?" : "Have an account?"}
          </Text>
          <Text style={styles.highLightText}>
            {isLogin ? "SIGN UP" : "SiGN IN"}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NavigateButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "200",
    marginHorizontal: 3,
  },
  highLightText: {
    fontWeight: "500",
  },
});
