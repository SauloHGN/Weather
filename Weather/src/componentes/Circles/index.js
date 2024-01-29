import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Vento from "../../assets/iconsWeather/wind.svg";
import UV from "../../assets/iconsWeather/uv3.svg";
import Umidade from "../../assets/iconsWeather/gota.svg";
import Lua from "../../assets/iconsWeather/moon.svg";
import Pressao from "../../assets/iconsWeather/pressure.svg";
import Visibilidade from "../../assets/iconsWeather/visibility.svg";

export default function Circles() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Umidade width={40} height={40} />
          </View>
          <Text style={styles.TextCircles}>Umidade</Text>
          <Text style={styles.InfoCircles}>50%</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Vento width={40} height={40} />
          </View>
          <Text style={styles.TextCircles}>Vento</Text>
          <Text style={styles.InfoCircles}>5km/h</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Visibilidade width={40} height={40} />
          </View>
          <Text style={styles.TextCircles}>Visibilidade</Text>
          <Text style={styles.InfoCircles}>Boa</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Pressao width={38} height={38} />
          </View>
          <Text style={styles.TextCircles}>Pressão</Text>
          <Text style={styles.InfoCircles}>19</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <UV width={40} height={40} />
          </View>
          <Text style={styles.TextCircles}>Raios UV</Text>
          <Text style={styles.InfoCircles}>Baixo</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Lua width={40} height={40} />
          </View>
          <Text style={styles.TextCircles}>Fase da Lua</Text>
          <Text style={styles.InfoCircles}>Nova</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    paddingBottom: 5,
    paddingStart: 16,
    paddingEnd: 35,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  item: {
    //backgroundColor: "#46474a",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: 20,
    height: 120,
    width: 150,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  TextCircles: {
    paddingTop: 5,
    color: "#FFFFFF",
  },
  InfoCircles: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "600",
  },
});
