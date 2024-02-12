import { useRef, useState } from "react";
import { ScrollView, StyleSheet, View, Text, Animated } from "react-native";
//
import Header, { statusBarHeight } from "../../componentes/Header";
import Slider from "../../componentes/Slider";
import WeekTemp from "../../componentes/WeekTemp";
import Circles from "../../componentes/Circles";
import SunTime from "../../componentes/SunTime";
import AirQuality from "../../componentes/AirQuality";
import Footer from "../../componentes/Footer";
//
import { LinearGradient } from "expo-linear-gradient";
//
import { useOrientation } from "../../scripts/useOrientation";

export default function Home() {
  //const orientation = useOrientation();
  //

  return (
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
      <View style={styles.container}>
        <ScrollView>
          <Header
            temperatura="17"
            clima="ensolarado"
            maxTemp="20º"
            minTemp="12º"
            loc="Londres"
            sensacao="16º"
            time="dia"
          />
          <Slider />
          <WeekTemp />
          <Circles />
          <AirQuality airQuality="50" airQualityNivel="Good" />
          <SunTime />
          <Footer />
          {/*  */}
        </ScrollView>
      </View>
    </LinearGradient>
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
    paddingTop: statusBarHeight,
  },
});

/*
Dia = colors={["#29B2DD", "#33AADD", "#1A73C0"]} locations={[0.1, 0.6, 1]}
Noite = colors={["#08244F", "#134CB5", "#0C378B"]} locations={[0.08, 0.45, 0.7]}
Nublado = colors={["#929FB7", "#647F97", "#646569"]} locations={[0.02, 0.4, 0.85]}
Chuva = colors={["#7DA17D", "#607D7F", "#4D5657"]} locations={[0.15, 0.35, 0.85]}
*/
