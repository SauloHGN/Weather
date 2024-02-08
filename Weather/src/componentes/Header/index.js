import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  Easing,
} from "react-native-reanimated";
//
import Icon from "react-native-vector-icons/FontAwesome";
import Loc from "../../assets/iconsWeather/location.svg";
import WeatherIcon from "../../assets/iconsWeather/Snowy.svg";
// Dia Parcialmente Nublado = "../../assets/iconsWeather/sunnyCloud.svg";
// Noite Parcialmente Nublada = "../../assets/iconsWeather/cloudyMoon.svg";
// Chuva Dia = "../../assets/iconsWeather/cloudySunRain.svg";
// Nuvem + Trovão = "../../assets/iconsWeather/cloudyThunder.svg";
// Chuva + Trovão = "../../assets/iconsWeather/heavyRain1.svg";
// Dia Limpo = "../../assets/iconsWeather/clearSun.svg";
// Noite Limpa = "../../assets/iconsWeather/nightClear1.svg";
// Nublado = "../../assets/iconsWeather/Cloudy1.svg";
// Nevando = "../../assets/iconsWeather/Snowy.svg";

//
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
export const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 35;
//

export default function Header({
  temperatura,
  clima,
  maxTemp,
  minTemp,
  loc,
  sensacao,
}) {
  //Animação SearchBar
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const searchBarTranslateX = useSharedValue(vw(100));

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
    //

    // Icones Personalizados

    const getWeatherTitle = (clima) => {
      switch (clima) {
        case "ensolarado":
          return require("../../assets/iconsWeather/sunny.svg");
      }
    };
    //
  };
  return (
    <View>
      <View style={styles.searchContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: searchBarTranslateX }],
            opacity: isSearchBarOpen ? 1 : 1,
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
          <WeatherIcon width={120} height={120} />
          <Text style={styles.temperatura}>
            {"  "}
            {temperatura}
            {"º"}
          </Text>

          <Text style={styles.clima}>{clima}</Text>

          <Text style={styles.localizacao}>
            {loc}
            {"  "}
            <Loc width={16} height={16} color="#FFF" />
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
    marginTop: 5,
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
