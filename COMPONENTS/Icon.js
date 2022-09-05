import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ size, color, name }) => {
  return <Ionicons size={size} color={color} name={name} />;
};

export default Icon;

const styles = StyleSheet.create({});
