import { useRef, useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//
import Header, { statusBarHeight } from "../../componentes/Header";
import Slider from "../../componentes/Slider";
import WeekTemp from "../../componentes/WeekTemp";
import Circles from "../../componentes/Circles";
import SunTime from "../../componentes/SunTime";
import AirQuality from "../../componentes/AirQuality";
import Footer from "../../componentes/Footer";
import { StartLocationData, getStartLocation } from "../../api/Api";
import { localizacaoAtual } from "../../../App";
//
//import { getClimaAtual } from "../../api/Api";
//import { ForecastWeek } from "../../api/Api";
//import { useOrientation } from "../../scripts/useOrientation";
//
const Tempo = "Rain"; //climaAtual.clima; ddfds

const getGradientColors = {
  Dia: ["#29B2DD", "#33AADD", "#1A73C0"],
  Noite: ["#1E2B58", "#353283", "#48459A"],
  Clouds: ["#A6ACB8", "#848482", "#696969"],
  Rain: ["#7B97AB", "#759696", "#4D5665"],
  default: ["#18181B", "#18181B"],
};

const getGradientLocations = {
  Dia: [0.2, 0.3, 0.65],
  Noite: [0.2, 0.9, 0.95],
  Clouds: [0.1, 0.7, 0.9],
  Rain: [0, 0.25, 0.75],
};

// export const StartData = (currentClimaData) => {
//   return currentClimaData;
// };

export default function Home() {
  //const orientation = useOrientation(); //  MUDANÇA DE PORTAIT (NÃO FUNCIONAL)
  const [climaAtual, setClimaAtual] = useState(
    StartLocationData(localizacaoAtual)
  );

  // const climaAtual = () => {
  //   getClimaAtual();
  // };

  console.log("Teste", climaAtual.temp, " ", climaAtual.cidade);
  //teste
  const localizacaoGradient = getGradientLocations[Tempo];
  const colorsGradient = getGradientColors[Tempo] ?? getGradientColors.default;
  return (
    <LinearGradient
      // Background Linear Gradient teste
      colors={colorsGradient}
      locations={localizacaoGradient}
      useAngle={true}
      angle={167}
      angleCenter={{ x: 0.5, y: 0.5 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <Header
            temperatura={climaAtual.temp}
            clima={climaAtual.clima}
            maxTemp={climaAtual.maxTemp}
            minTemp={climaAtual.minTemp}
            loc={climaAtual.cidade}
            sensacao={climaAtual.sensacao}
            paisCode={climaAtual.paisCode}
            time="dia"
          />
          <Slider />
          <WeekTemp />
          <Circles
            umidade={climaAtual.umidade}
            vento={climaAtual.velVento}
            visibilidade={climaAtual.visibilidade}
            pressao={climaAtual.pressao}
          />
          <AirQuality airQuality="250" airQualityNivel="Good" />
          <SunTime sunrise={climaAtual.sunrise} sunset={climaAtual.sunset} />
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
