import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  Easing,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
//
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
import Icon from "react-native-vector-icons/FontAwesome";
import Loc from "../../assets/iconsWeather/location.svg";
//
// Icones Personalizados
var getWeatherIcon = (clima, time) => {
  let iconSource;
  switch (true) {
    case clima == "Ensolarado":
      iconSource = require("../../assets/gifs/Animation-ClearSol.json");
      break;
    case clima == "Nublado":
      iconSource = require("../../assets/gifs/Animation-Nublado.json");
      break;
    case clima == "Chuvoso":
      iconSource = require("../../assets/gifs/Animation-Chuva.json");
      break;
    case clima == "Tempestade":
      iconSource = require("../../assets/gifs/Animation-ChuvaTrovao.json");
      break;
    case clima == "Neve":
      iconSource = require("../../assets/gifs/Animation-Neve.json");
      break;
    case clima == "Parc. Nublado" && time == "dia":
      iconSource = require("../../assets/gifs/Animation-ParcSol.json");
      break;
    case clima == "Parc. Nublado" && time == "noite":
      iconSource = require("../../assets/gifs/Animation-ParcLua.json");
      break;
    default:
      iconSource = require("../../assets/gifs/Animation-Nublado.json");
      break;
  }
  return iconSource;
};
//
export const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 35;

export default function Header({
  temperatura,
  clima,
  maxTemp,
  minTemp,
  loc,
  sensacao,
  time,
}) {
  //Animação SearchBar
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const searchBarTranslateX = useSharedValue(vw(100));
  //

  const changeSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen);

    if (isSearchBarOpen) {
      searchBarTranslateX.value = withSpring(isSearchBarOpen ? vw(100) : 0, {
        damping: 20,
        stiffness: 150,
        easing: Easing.inOut(Easing.ease),
      });
      return;
    } else {
      searchBarTranslateX.value = withSpring(isSearchBarOpen ? 0 : 0, {
        damping: 20,
        stiffness: 150,
        easing: Easing.inOut(Easing.ease),
      });
    }
    //------------------------------------//
  };
  return (
    <View>
      <View style={styles.searchContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: searchBarTranslateX }],
          }}>
          {/* Texto de pesquisa*/}
          <TextInput
            editable={isSearchBarOpen ? true : false}
            style={[styles.searchBar]}
            placeholder="Pesquisar"
          />
        </Animated.View>

        <TouchableOpacity
          onPress={changeSearchBar}
          activeOpacity={0.6}
          style={styles.buttonS}>
          <Icon name="search" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          <LottieView
            source={getWeatherIcon(clima, time)}
            style={{
              width: 100,
              height: 100,
              marginStart: 5,
            }}
            autoPlay
          />
          <Text style={styles.temperatura}>
            {"  "}
            {temperatura}
            {"º"}
          </Text>

          <Text style={styles.clima}>{clima}</Text>

          <Text style={styles.localizacao}>
            {"  "}
            {loc} <Loc width={16} height={16} color="#FFF" />
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
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  temperatura: {
    flex: 1,
    color: "#FFF",
    fontSize: 76,
    fontWeight: "500",
    justifyContent: "center",
  },
  clima: {
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
  },
  localizacao: {
    flexDirection: "row",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    justifyContent: "center",
    marginTop: 20,
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
    marginStart: 10,
  },
  searchBar: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 15,
    left: 0,
    paddingStart: 16,
    height: 36,
    width: vw(80),
    borderRadius: 30,
    fontSize: 14,
  },
  header: {
    height: 80 + statusBarHeight,
    paddingTop: statusBarHeight,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
