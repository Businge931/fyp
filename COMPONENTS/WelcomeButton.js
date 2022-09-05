import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../CONSTANTS/styles";

const WelcomeButton = ({ children, onPress, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default WelcomeButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: GlobalStyles.colors.gray300,
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    padding: 4,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.gray800,
    borderRadius: 30,
  },
});
