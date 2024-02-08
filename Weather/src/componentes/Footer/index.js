import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Developed by SauloHGN</Text>
      <Text style={styles.texto}>2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 5,
  },
  texto: {
    color: "#D5D5D0",
    fontSize: 12,
    fontWeight: "700",
    marginStart: 15,
    marginEnd: 15,
  },
});
