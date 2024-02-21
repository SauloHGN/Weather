import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  PanResponder,
  Image,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
//
import DParcNublado from "../../assets/iconsWeather/sunnyCloud.svg";
import NParcNublado from "../../assets/iconsWeather/cloudyMoon.svg";
import Chuva from "../../assets/iconsWeather/cloudyRain1.svg";
import Trovoada from "../../assets/iconsWeather/cloudyThunder.svg";
import ChuvaT from "../../assets/iconsWeather/heavyRain1.svg";
import DLimpo from "../../assets/iconsWeather/clearSun.svg";
import NLimpa from "../../assets/iconsWeather/nightClear1.svg";
import Nublado from "../../assets/iconsWeather/Cloudy1.svg";
import Neve from "../../assets/iconsWeather/Snowy.svg";
//
import Teste from "../../assets/iconsWeather/sunnyCloud.svg";
const Icon = {};
// Dia Parcialmente Nublado = "../../assets/iconsWeather/sunnyCloud.svg";
// Noite Parcialmente Nublada = "../../assets/iconsWeather/cloudyMoon.svg";
// Chuva Dia = "../../assets/iconsWeather/cloudySunRain.svg";
// Nuvem + Chuva = "../../assets/iconsWeather/cloudyRain1.svg";
// Nuvem + Trovão = "../../assets/iconsWeather/cloudyThunder.svg";
// Chuva + Trovão = "../../assets/iconsWeather/heavyRain1.svg";
// Dia Limpo = "../../assets/iconsWeather/clearSun.svg";
// Noite Limpa = "../../assets/iconsWeather/nightClear1.svg";
// Nublado = "../../assets/iconsWeather/Cloudy1.svg";
// Nevando = "../../assets/iconsWeather/Snowy.svg";

export default function Slider() {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dx > 10 || gestureState.dx < -10) {
        setScrollEnabled(false);
      } else {
        setScrollEnabled(true);
      }
    },
    onPanResponderRelease: () => {
      setScrollEnabled(true);
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        {...panResponder.panHandlers}
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.item}>
          <Text style={styles.text}>10:00</Text>
          {/*  */}
          <Chuva width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>11:00</Text>
          {/*  */}
          <ChuvaT width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>2%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>12:00</Text>
          {/*  */}
          <Trovoada width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>14º</Text>
          <Text style={styles.text}>2%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>13:00</Text>
          {/*  */}
          <Teste width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>15º</Text>
          <Text style={styles.text}>2%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>14:00</Text>
          {/*  */}
          <Nublado width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>18º</Text>
          <Text style={styles.text}>1%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>15:00</Text>
          {/*  */}
          <Neve width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>18º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>16:00</Text>
          {/*  */}
          <DParcNublado width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>18º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>17:00</Text>
          {/*  */}
          <NParcNublado width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>17º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>18:00</Text>
          {/*  */}
          <DLimpo width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>16º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>19:00</Text>
          {/*  */}
          <NLimpa width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>15º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>20:00</Text>
          {/*  */}
          <Teste width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>15º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>21:00</Text>
          {/*  */}
          <Teste width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>14º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>22:00</Text>
          {/*  */}
          <Teste width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>10%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>23:00</Text>
          {/*  */}
          <Teste width={25} height={25} style={styles.icone} />
          {/*  */}
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>10%</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 35,
    marginBottom: 5,
    marginStart: 12,
    marginEnd: 12,
  },
  scrollView: {
    width: "100%",
  },
  item: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    padding: 12,
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
    marginEnd: 8,
    borderRadius: 15,
    width: vw(20),
  },
  text: {
    color: "#FFF",
    marginTop: 2,
  },
  icone: {
    marginBottom: 2,
    marginTop: 2,
  },
});
