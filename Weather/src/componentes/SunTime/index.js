import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Nascer from "../../assets/iconsWeather/sunrise.svg";
import Por from "../../assets/iconsWeather/sunset.svg";

export default function SunTime() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Nascer />
        <Text style={styles.textTime}>6:00</Text>
      </View>

      <View style={styles.item}>
        <Por />
        <Text style={styles.textTime}>17:48</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#46474a',
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    flexDirection: "row",
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 5,
    marginBottom: 10,
    marginStart: 12,
    marginEnd: 12,
    borderRadius: 15,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTime: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 14,
  },
});
