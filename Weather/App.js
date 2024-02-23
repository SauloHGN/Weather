import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
import Home from "./src/pages/Home";
import Loading from "./src/pages/Loading";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="#0000" style="light" />
      </SafeAreaView>
      {/*  */}
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* <Home /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
