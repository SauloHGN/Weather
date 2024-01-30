import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SunTime() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qualidade do Ar</Text>
      <View style={styles.separator} />

      <View style={styles.barra}>
        <View style={[styles.secao, { borderBottomColor: "red" }]} />
        <View style={[styles.secao, { borderBottomColor: "yellow" }]} />
        <View style={[styles.secao, { borderBottomColor: "green" }]} />
      </View>
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
    marginBottom: 5,
  },
  titulo: {
    marginStart: 15,
    marginBottom: 8,
    color: "#FFF",
  },
  barra: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 6,
    borderRadius: 30,
    //borderBottomColor: "#ccc",
    marginBottom: 5,
    marginTop: 30,
    marginEnd: 15,
    marginStart: 15,
  },
  secao: {
    flex: 1,
  },
});
