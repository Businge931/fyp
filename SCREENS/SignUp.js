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
import { signup } from "../HTTP/http";

const Signup = ({ navigation }) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const signupHandler = () => {
    const crudentialsIsValid = {
      username: enteredUsername?.length > 3,
      email: enteredEmail?.includes("@"),
      password: enteredPassword?.length > 2,
    };

    if (
      crudentialsIsValid.username &&
      crudentialsIsValid.email &&
      crudentialsIsValid.password
    ) {
      try {
        console.log(enteredEmail, enteredPassword, enteredUsername);

        // return;

        signup(enteredUsername, enteredEmail, enteredPassword);
      } catch (error) {
        Alert.alert("Error", "Something went wrong");

        console.log("error", error);
      }
    } else if (
      !crudentialsIsValid.username &&
      !crudentialsIsValid.email &&
      !crudentialsIsValid.password
    ) {
      Alert.alert("Invalid Inputs", "inputs can't be empty");
      return;
    } else if (!crudentialsIsValid.username) {
      Alert.alert("Invalid Inputs", "Check your username and try again!");
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
  const userNameChangeHandler = (username) => {
    // console.log(username);
    setUsername(username);
  };

  const emailChangeHandler = (email) => {
    // console.log(email);
    setEmail(email);
  };

  const passwordChangeHandler = (password) => {
    // console.log(password);
    setPassword(password);
  };

  const tologin = () => {
    navigation.navigate("login");
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
          <Text style={styles.heading}>SignUp</Text>
          <View style={styles.logo}></View>
          <Input
            name="person-outline"
            size={24}
            color={GlobalStyles.colors.gray100}
            style={styles.input}
            inputTextConfig={{
              placeholder: "Username",
              placeholderTextColor: GlobalStyles.colors.gray100,
              selectionColor: GlobalStyles.colors.gray100,
              textAlign: "center",
              onChangeText: userNameChangeHandler,
            }}
            value={enteredUsername}
            // onChangText={userNameChangeHandler}
          />
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
              onChangeText: emailChangeHandler,
            }}
            value={enteredEmail}
            // onChangText={emailChangeHandler}
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
              secureTextEntry: true,
              onChangeText: passwordChangeHandler,
            }}
            value={enteredPassword}
            // onChangText={passwordChangeHandler}
          />

          <Button style={styles.button} onPress={signupHandler}>
            SIGN UP
          </Button>
          <Pressable
            onPress={tologin}
            style={({ pressed }) => [
              styles.Connector,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.connectorText}>Already have an account?</Text>
          </Pressable>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default Signup;

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
    top: 60,
  },
  logo: {
    width: 150,
    height: 100,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.color100,
    left: "30%",
    top: "15%",
  },
  input: {
    marginHorizontal: 60,
    top: 150,
    padding: 5,
    marginTop: 20,
  },
  button: {
    top: 200,
  },
  Connector: {
    top: 250,
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
