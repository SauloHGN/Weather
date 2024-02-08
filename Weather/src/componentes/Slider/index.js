import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, PanResponder } from "react-native";

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
          <Text>Icon</Text>
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>11:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>2%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>12:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>14º</Text>
          <Text style={styles.text}>2%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>13:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>15º</Text>
          <Text style={styles.text}>2%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>14:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>18º</Text>
          <Text style={styles.text}>1%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>15:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>18º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>16:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>18º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>17:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>17º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>18:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>16º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>19:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>15º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>20:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>15º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>21:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>14º</Text>
          <Text style={styles.text}>0%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>22:00</Text>
          <Text>Icon</Text>
          <Text style={styles.text}>13º</Text>
          <Text style={styles.text}>10%</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>23:00</Text>
          <Text>Icon</Text>
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
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flexDirection: "row",
    paddingStart: 10,
    paddingEnd: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 15,
    marginBottom: 10,
    marginStart: 12,
    marginEnd: 12,
    borderRadius: 15,
  },
  scrollView: {
    width: "100%",
  },
  item: {
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  text: {
    color: "#FFF",
  },
});
