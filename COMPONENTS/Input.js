import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../CONSTANTS/styles";
import { Ionicons } from "@expo/vector-icons";

const Input = ({ name, color, size, inputTextConfig, isInvalid, style }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Ionicons name={name} size={size} color={color} />
      <TextInput
        {...inputTextConfig}
        style={[styles.input, isInvalid && styles.inputInvalid]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: GlobalStyles.colors.color100,
  },
  input: {
    color: GlobalStyles.colors.gray100,
    width: "80%",
    marginLeft: 10,
    fontSize: 18,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.error100,
  },
});
