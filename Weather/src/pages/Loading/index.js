import React, { useRef, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Animated, SafeAreaView } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import NetInfo from "@react-native-community/netinfo";
//
import useLocationStore from "../../scripts/useLocationStore";
import Logo from "../../assets/iconsWeather/logo.svg";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
import LottieView from "lottie-react-native";

export default function Loading({ navigation }) {
  const [isConnected, setIsConnected] = useState(null);
  const setLocation = useLocationStore((state) => state.setLocation);

  useEffect(() => {
    // Checar Localização
    requestLocationPermissions();

    // Checar conexão com internet
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isConnected === true) {
      navigation.replace("Home");
    }
  }, [isConnected]);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      localizacaoAtual = await getCurrentPositionAsync({});
      setLocation(localizacaoAtual);
    } else {
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="black" style="light" />
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
