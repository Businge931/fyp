import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Login from "./SCREENS/Login";
import Welcome from "./SCREENS/Welcome";
import Main from "./SCREENS/Main";
import { GlobalStyles } from "./CONSTANTS/styles";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./SCREENS/SignUp";
import { Provider } from "react-redux";
import { store } from "./STORE/index-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="signup"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="main"
              component={Main}
              options={{
                headerShown: false,
                contentStyle: {
                  // backgroundColor: GlobalStyles.colors.teal800,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
