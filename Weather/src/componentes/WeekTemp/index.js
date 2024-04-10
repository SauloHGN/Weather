import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//

export default function WeekTemp(props) {
  const dados = props[Object.keys(props)[0]];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Previsão da Semana</Text>
      <View style={styles.separator} />
      {dados &&
        Object.entries(dados).map(([chave, valor]) => (
          <View style={styles.item} key={chave}>
            <Text style={styles.dia}>{chave}</Text>
            <Text style={styles.sub}>Max: {valor.temp_max.toFixed(0)}º</Text>
            <Text style={styles.sub}>Min: {valor.temp_min.toFixed(0)}º</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
    marginStart: vw(3),
    marginEnd: vw(3),
    paddingTop: 10,
    paddingBottom: 16,
    borderRadius: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    paddingStart: 2,
    paddingEnd: 2,
  },
  dia: {
    flex: 1,
    alignItems: "center",
    paddingStart: 5,
    paddingEnd: 0,
    color: "#FFF",
  },
  sub: {
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 12,
    color: "#FFF",
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginBottom: 5,
    marginEnd: 10,
    marginStart: 10,
  },
  titulo: {
    marginStart: 15,
    marginBottom: 10,
    color: "#FFF",
  },
});
