import { View, Text, StyleSheet, TextInput } from "react-native";

function FormInput({ title, placeholder, secure, onChangeText }: any) {
  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#586e85"}
          style={styles.textInput}
          secureTextEntry={secure}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>
      </View>
    </View>
  );
}

export default FormInput;

const styles = StyleSheet.create({
  formInputContainer: {
    marginHorizontal: 32,
    marginTop: 12,
  },
  titleText: {
    fontWeight: "500",
    marginBottom: 12,
    fontSize: 18,
  },
  textInputContainer: {
    overflow: "hidden",
  },
  textInput: {
    fontSize: 14,
    fontWeight: "200",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f5fafc",
  },
});
