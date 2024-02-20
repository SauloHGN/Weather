import { useRef, useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Animated } from "react-native";
//
import { ClimaAtual } from "../../api/Api";
import { ForecastWeek } from "../../api/Api";
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
//
//
/*ClimaAtual("city").then((ClimaData) => {
  console.log("Dados do clima:", ClimaData);

  var temperatura = ClimaAtual.temp;
  var clima = ClimaAtual.clima;
  var maxTemp = ClimaAtual.maxTemp;
  var minTemp = ClimaAtual.minTemp;
  var sensacao = ClimaAtual.sensacao;
  var pressao = ClimaAtual.pressao;
  var humidade = ClimaAtual. humidade;
        sensacao: data.main.feels_like,
        pressao: data.main.pressure,
        humidade: data.main.humidity,
        velVento: data.wind.speed,
        sunrise: sunriseTimestamp.toLocaleTimeString(),
        sunset: sunsetTimestamp.toLocaleTimeString(),
        paisCode: data.sys.country,

});*/
const Tempo = "Chuvoso";

const getGradientColors = {
  Dia: ["#29B2DD", "#33AADD", "#1A73C0"],
  Noite: ["#1E2B58", "#353283", "#48459A"],
  Nublado: ["#A6ACB8", "#848482", "#696969"],
  Chuvoso: ["#7B97AB", "#759696", "#4D5665"],
};

const getGradientLocations = {
  Dia: [0.2, 0.3, 0.65],
  Noite: [0.2, 0.9, 0.95],
  Nublado: [0.1, 0.7, 0.9],
  Chuvoso: [0, 0.25, 0.75],
};

export default function Home() {
  //const orientation = useOrientation(); //  MUDANÇA DE PORTAIT (NÃO FUNCIONAL)
  const [climaData, setClimaData] = useState(null);
  useEffect(() => {
    ClimaAtual("São Paulo")
      .then((data) => setClimaData(data))
      .catch((error) => console.error(error));
  }, []);
  //
  const localizacaoGradient = getGradientLocations[Tempo];
  const colorsGradient = getGradientColors[Tempo];
  return (
    <LinearGradient
      // Background Linear Gradient
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
            temperatura={ClimaAtual.temp}
            clima={ClimaAtual.clima}
            maxTemp={ClimaAtual.maxTemp}
            minTemp={ClimaAtual.minTemp}
            loc={ClimaAtual.city}
            sensacao={ClimaAtual.sensacao}
            paisCode={ClimaAtual.paisCode}
            time="dia"
          />
          <Slider />
          <WeekTemp />
          <Circles />
          <AirQuality airQuality="250" airQualityNivel="Good" />
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
