import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 44;

export default function Header({
  temperatura,
  clima,
  maxTemp,
  minTemp,
  loc,
  sensacao,
}) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonS}>
          <Icon name="search" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.temperatura}> {temperatura}</Text>
        <Text style={styles.clima}> {clima}</Text>

        <Text style={styles.localizacao}>
          {"\n"}
          {loc}
          {"  "}
          <Icon name="map-marker" size={20} color="#FFF" />
        </Text>

        <Text style={styles.infos}>
          {maxTemp}/{minTemp} Sensação térmica de {sensacao}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#46474a",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  temperatura: {
    color: "#FFF",
    fontSize: 76,
    fontWeight: "500",
    marginTop: 5,
  },
  clima: {
    color: "#FFF",
    fontSize: 18,
  },
  localizacao: {
    textAlign: "left",
    color: "#FFF",
    fontSize: 16,
    justifyContent: "space-between",
  },
  infos: {
    color: "#FFF",
    fontSize: 14,
  },
  buttonS: {
    position: "absolute",
    marginTop: 0,
    marginStart: 5,
  },
});
