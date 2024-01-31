import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
// import Animated, {
//   Easing,
//   useSharedValues,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";

//

//
const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20
  : 40;

export default function Header({
  temperatura,
  clima,
  maxTemp,
  minTemp,
  loc,
  sensacao,
}) {
  return (
    <View>
      <View style={styles.searchContainer}>
        {/* Texto de pesquisa*/}
        <TextInput style={styles.searchBar} placeholder="Pesquisar" />

        <TouchableOpacity activeOpacity={0.6} style={styles.buttonS}>
          <Icon name="search" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 40,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  temperatura: {
    color: "#FFF",
    fontSize: 76,
    fontWeight: "500",
    marginTop: 30,
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
  searchContainer: {
    paddingTop: statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 12,
  },
  buttonS: {
    marginEnd: 7,
  },
  searchBar: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 20,
    paddingStart: 12,
    height: 36,
    width: 300,
    borderRadius: 30,
    fontSize: 14,
  },
});
