import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Animated, SafeAreaView } from "react-native";
import Logo from "../../assets/iconsWeather/logo.svg";
//
import Header, { statusBarHeight } from "../../componentes/Header";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="#0000" style="light" />
      </SafeAreaView>
      <View style={styles.logo}>
        <Logo height={vw(55)} weight={vw(55)} />
      </View>
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
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: vw(25),
    height: vw(25),
  },
});
