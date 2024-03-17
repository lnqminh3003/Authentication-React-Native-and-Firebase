import { View, Text, StyleSheet, Pressable } from "react-native";

import { Colors } from "../../constants/styles";

function ButtonConfirm({ isLogin,onPress }: any) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
          <Text style={styles.text}>
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </Text>
      </Pressable>
    </View>
  );
}

export default ButtonConfirm;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 24,
    paddingVertical : 12,
    marginHorizontal:"9%",
    borderRadius: 8,
    backgroundColor: Colors.primary500
  },

  text: {
    fontSize: 16,
    color:"white",
    fontWeight: "700",
    marginHorizontal:3
  },
});
