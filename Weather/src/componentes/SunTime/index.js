import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
import Nascer from "../../assets/iconsWeather/sunrise1.svg";
import Por from "../../assets/iconsWeather/sunset1.svg";

export default function SunTime() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <Nascer /> */}
        <View style={styles.subItem}>
          <View style={styles.circle}>
            <Nascer />
          </View>
          <Text style={styles.titulo}>Nascer do Sol</Text>
        </View>
        <Text style={styles.textTime}>6:00</Text>
      </View>

      <View style={styles.item}>
        {/* <Por /> */}
        <View style={styles.subItem}>
          <View style={styles.circle}>
            <Por />
          </View>
          <Text style={styles.titulo}>Por do Sol</Text>
        </View>
        <Text style={styles.textTime}>17:48</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  item: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    paddingTop: 10,
    marginStart: vw(3),
    marginEnd: 12,
    paddingBottom: 15,
    borderRadius: 12,
    alignContent: "center",
  },
  subItem: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    marginStart: 10,
  },
  titulo: {
    color: "#FFF",
    marginStart: 5,
    fontSize: 14,
    marginTop: 10,
  },
  circle: {
    width: vw(9),
    height: vw(9),
    borderRadius: 50,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  textTime: {
    alignItems: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 22,
    marginTop: 10,
  },
});
