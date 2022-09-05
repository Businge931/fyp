import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../CONSTANTS/styles";

const Button = ({ children, onPress, style, classes }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, classes]}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: GlobalStyles.colors.gray300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    padding: 4,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
