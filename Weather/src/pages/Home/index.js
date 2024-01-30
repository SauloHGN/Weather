import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "../../componentes/Header";
import Slider from "../../componentes/Slider";
import WeekTemp from "../../componentes/WeekTemp";
import Circles from "../../componentes/Circles";
import SunTime from "../../componentes/SunTime";
import AirQuality from "../../componentes/AirQuality";

import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#7DA17D", "#607D7F", "#4D5657"]}
          locations={[0.15, 0.35, 0.85]}
          useAngle={true}
          angle={167}
          angleCenter={{ x: 0.5, y: 0.5 }}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}>
          <Header
            temperatura="17º"
            clima="Parc. Nublado"
            maxTemp="20º"
            minTemp="12º"
            loc="Londres"
            sensacao="16º"
          />

          <Slider />
          <WeekTemp />
          <Circles />
          <AirQuality />
          <SunTime />
          <Text></Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
});

/*
Dia = colors={["#29B2DD", "#33AADD", "#1A73C0"]} locations={[0.1, 0.6, 1]}
Noite = colors={["#08244F", "#134CB5", "#0C378B"]} locations={[0.08, 0.45, 0.7]}
Nublado = colors={["#929FB7", "#647F97", "#646569"]} locations={[0.02, 0.4, 0.85]}
Chuva = colors={["#7DA17D", "#607D7F", "#4D5657"]} locations={[0.15, 0.35, 0.85]}
*/
