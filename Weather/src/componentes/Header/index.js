import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  Easing,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
//
//
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
const statusBarHeight = StatusBar.currentHeight
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
    marginTop: 70,
  },
  temperatura: {
    color: "#FFF",
    fontSize: 76,
    fontWeight: "500",
    marginTop: 10,
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
});
