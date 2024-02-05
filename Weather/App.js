import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="#0000" style="light" />
      </SafeAreaView>

      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
