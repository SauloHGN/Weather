import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
export default function AirQuality({ airQuality, airQualityNivel }) {
  const [indicadorPos, setIndicadorPos] = useState(0);

  useEffect(() => {
    const maxValue = 500;
    const totalWidht = vw(89);

    const newPos = (airQualityNivel / maxValue) * totalWidht;

    setIndicadorPos(newPos);
  }, [airQualityNivel]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qualidade do Ar</Text>
      <View style={styles.separator} />

      <View style={styles.containerText}>
        <Text style={styles.airQualityNivel}>{airQualityNivel} de 500</Text>
      </View>
      <Text style={styles.airQualityNumber}>{airQuality}</Text>
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
        <View
          style={[
            styles.indicador,
            { right: isNaN(indicadorPos) ? 0 : indicadorPos },
          ]}></View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flexDirection: "column",
    justifyContent: "center",
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 25,
    paddingTop: 10,
    marginTop: 5,
    marginBottom: 10,
    marginStart: 12,
    marginEnd: 12,
    borderRadius: 15,
  },
  titulo: {
    marginStart: 10,
    marginBottom: 8,
    color: "#FFF",
  },
  separator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginBottom: 5,
  },
  containerText: {
    flexDirection: "row",
  },
  airQualityNumber: {
    fontSize: 22,
    fontWeight: "500",
    marginStart: 10,
    color: "#FFF",
  },
  airQualityNivel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#e7e7e7",
    marginTop: 7,
    marginStart: 10,
  },
  barra: {
    flexDirection: "row",
    marginTop: 10,
    height: 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: vw(89),
  },
  indicador: {
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    top: -5,
    width: 7,
    height: 14,
  },
});
