import React from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

export default function Hero() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const heroHeight = isDesktop ? width * 0.46 : width * 0.9;
  const whiteHeight = heroHeight * 0.20;
  const pinkHeight = heroHeight * 0.80;

  return (
    <View style={[styles.container, { height: heroHeight }]}>
      <View style={[styles.whiteBackground, { height: whiteHeight }]} />
      <View
        style={[
          styles.pinkBackground,
          {
            height: pinkHeight * 0.72,
            bottom: heroHeight * 0.1,
          },
        ]}
      />
      <Image
        source={require("../../assets/images/modella-hero.png")}
        style={[
          styles.modelImage,
          {
            width: isDesktop ? width * 0.3 : width * 0.55,
            height: isDesktop ? heroHeight * 0.95 : heroHeight,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#fff",
    overflow: "hidden",
    zIndex: 1,
  },
  whiteBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  pinkBackground: {
    position: "absolute",
    left: 0,
    width: "100%",
    backgroundColor: "#F8DAD1",
    zIndex: 1,
  },
  modelImage: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
});
