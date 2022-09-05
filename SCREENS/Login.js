import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../CONSTANTS/styles";
import Input from "../COMPONENTS/Input";
import Button from "../COMPONENTS/Button";
import { login } from "../HTTP/http";

const Login = ({ navigation }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const loginHandler = () => {
    const crudentialsIsValid = {
      email: enteredEmail?.includes("@"),
      password: enteredPassword?.length > 2,
    };

    if (crudentialsIsValid.email && crudentialsIsValid.password) {
      try {
        login(enteredEmail, enteredPassword);
      } catch (error) {
        Alert.alert("Error", "Something went wrong");

        console.log("error", error);
      }
    } else if (!crudentialsIsValid.email && !crudentialsIsValid.password) {
      Alert.alert("Invalid Inputs", "inputs can't be empty");
      return;
    } else if (!crudentialsIsValid.email) {
      Alert.alert("Invalid Inputs", "Check your email and try again!");
      return;
    } else if (!crudentialsIsValid.password) {
      Alert.alert(
        "Invalid Inputs",
        "Check your password. Length should be greater than 6"
      );
      return;
    }

    navigation.navigate("main");
  };

  const emailHandler = (email) => {
    console.log(email);
    setEnteredEmail(email);
  };
  const passwordHandler = (password) => {
    setEnteredPassword(password);
  };

  const toSignup = () => {
    navigation.navigate("signup");
  };
  return (
    <>
      <LinearGradient
        colors={[
          GlobalStyles.colors.pink500,
          GlobalStyles.colors.teal800,
          GlobalStyles.colors.color300,
        ]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <Text style={styles.heading}>Login</Text>
          <View style={styles.logo}></View>
          <Input
            name="mail"
            size={24}
            color={GlobalStyles.colors.gray100}
            style={styles.input}
            inputTextConfig={{
              placeholder: "E-mail",
              placeholderTextColor: GlobalStyles.colors.gray100,
              selectionColor: GlobalStyles.colors.gray100,
              textAlign: "center",
              onChangeText: emailHandler,
            }}
            value={enteredEmail}
          />
          <Input
            name="eye"
            size={24}
            color={GlobalStyles.colors.gray100}
            style={styles.input}
            inputTextConfig={{
              placeholder: "password",
              placeholderTextColor: GlobalStyles.colors.gray100,
              selectionColor: GlobalStyles.colors.gray100,
              textAlign: "center",
              onChangeText: passwordHandler,
            }}
            value={enteredPassword}
          />
          {/* {isLoading && (
            <LoadingOverlay visible={true} message="Logging you in..." />
          )} */}
          <Button style={styles.button} onPress={loginHandler}>
            LOGIN
          </Button>
          <Pressable
            onPress={toSignup}
            style={({ pressed }) => [
              styles.Connector,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.connectorText}>Don't have an account?</Text>
          </Pressable>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default Login;

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
  input: {
    marginHorizontal: 60,
    top: 200,
    padding: 5,
    marginTop: 15,
  },
  button: {
    top: 300,
  },
  Connector: {
    top: 350,
    marginHorizontal: 50,
  },
  connectorText: {
    textAlign: "center",
    padding: 10,
    color: GlobalStyles.colors.color100,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.gray100,
    color: GlobalStyles.colors.gray300,
    borderRadius: 8,
  },
});
