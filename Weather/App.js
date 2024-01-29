import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        /*backgroundColor="#46474a"*/ backgroundColor="#0000"
        style="light"
      />

      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
