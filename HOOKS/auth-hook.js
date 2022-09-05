import { useState } from "react";
import { signup } from "../HTTP/http";
import { login } from "../HTTP/http";

const useAuth = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredUsername, setUsername] = useState("");

  const authHandler = ({ isLogin }) => {
    const checkMode = () => {
      return isLogin
        ? login(enteredEmail, enteredPassword)
        : signup(_, enteredEmail, enteredPassword);
    };

    const crudentialsIsValid = {
      email: enteredEmail?.includes("@"),
      password: enteredPassword?.length > 2,
    };
    if (crudentialsIsValid.email && crudentialsIsValid.password) {
      try {
        checkMode();
        // login(enteredEmail, enteredPassword);
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
  };
  const emailHandler = (email) => {
    setEnteredEmail(email);
  };
  const passwordHandler = (password) => {
    setEnteredPassword(password);
  };
  return {
    emailHandler,
    passwordHandler,
    authHandler,
    // isLogin
  };
};

export default useAuth;
