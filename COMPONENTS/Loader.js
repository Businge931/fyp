import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { GlobalStyles } from "../CONSTANTS/styles";

const Loader = () => {
  // const { height, width } = useWindowDimensions();
  return (
    // <View style={styles.container}>
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={GlobalStyles.colors.color300} />
      <Text style={{ paddingRight: 10, fontSize: 18 }}>Processing...</Text>
      {/* </View> */}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // backgroundColor: "black",
    alignItems: "center",
    zIndex: 1,
    opacity: 0.6,
  },
  loader: {
    height: 70,
    backgroundColor: "white",
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "70%",
    borderRadius: 6,
    top: "160%",
  },
});
