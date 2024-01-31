import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function AirQuality() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qualidade do Ar</Text>
      <View style={styles.separator} />

      <LinearGradient
        colors={[
          "#7e0023",
          "#8f3f97",
          "#ff0000",
          "#ff7e00",
          "#ffff00",
          "#00e400",
        ]}
        locations={[0.001, 0.32, 0.48, 0.64, 0.8, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.barra}>
        <View style={styles.indicador} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#46474a',
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    flexDirection: "column",
    justifyContent: "center",
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 30,
    paddingTop: 10,
    marginTop: 5,
    marginBottom: 10,
    marginStart: 12,
    marginEnd: 12,
    borderRadius: 15,
  },
  separator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginBottom: 30,
  },
  titulo: {
    marginStart: 15,
    marginBottom: 8,
    color: "#FFF",
  },
  // barra: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderBottomWidth: 6,
  //   borderRadius: 30,
  //   //borderBottomColor: "#ccc",
  //   marginBottom: 5,
  //   marginTop: 30,
  //   marginEnd: 15,
  //   marginStart: 15,
  // },
  barra: {
    flexDirection: "row",
    height: 5,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  indicador: {
    flex: 1,
    borderRadius: 10,
  },
});
