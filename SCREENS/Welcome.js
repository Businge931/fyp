import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../CONSTANTS/styles";

const Welcome = ({ navigation }) => {
  const signupButtonHandler = () => {
    navigation.navigate("signup");
  };
  const loginButtonHandler = () => {
    navigation.navigate("login");
  };

  return (
    <>
      <LinearGradient
        colors={[
          GlobalStyles.colors.pink500,
          GlobalStyles.colors.color300,
          GlobalStyles.colors.teal800,
        ]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <Text style={styles.heading}>Screening Intoxicated Drivers</Text>
          <View style={styles.logo}></View>
          <Text style={styles.text}>Let's get you scanned...</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button1,
                pressed && styles.pressed,
              ]}
              onPress={loginButtonHandler}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button2,
                pressed && styles.pressed,
              ]}
              onPress={signupButtonHandler}
            >
              <Text style={styles.signupText}>SIGN UP</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    top: 80,
  },
  logo: {
    width: 150,
    height: 100,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.color100,
    left: "30%",
    top: "20%",
  },
  text: {
    color: GlobalStyles.colors.color100,
    textAlign: "center",
    top: "25%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "120%",
  },
  loginText: {
    color: GlobalStyles.colors.color100,
    fontSize: 20,
    fontWeight: "300",
    padding: 10,
  },
  signupText: {
    color: GlobalStyles.colors.color100,
    fontSize: 20,
    fontWeight: "300",
    padding: 10,
  },
  button1: {
    marginLeft: 50,
  },
  button2: {
    marginRight: 50,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.gray100,
    color: GlobalStyles.colors.gray300,
  },
});
