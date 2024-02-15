import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Animated, SafeAreaView } from "react-native";
//
import Header, { statusBarHeight } from "../../componentes/Header";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="#0000" style="light" />
      </SafeAreaView>
      <LottieView
        style={styles.animation}
        source={require("../../assets/gifs/Animation-loading.json")}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#26292b",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    //flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    marginTop: 80,
  },
});
