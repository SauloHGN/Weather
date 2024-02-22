import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import NetInfo from "@react-native-community/netinfo";
//
import Home from "./src/pages/Home";
import Loading from "./src/pages/Loading";

export default function App() {
  const [isConnected, setIsConnected] = useState(null);
  const [location, setLocation] = useState(null);

  // Checar Localização
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const localizacaoAtual = await getCurrentPositionAsync({});
      setLocation(localizacaoAtual);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  // Checar conexão com internet
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected == null) {
    return <Loading />;
  }

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
