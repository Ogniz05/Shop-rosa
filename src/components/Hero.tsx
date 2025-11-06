import React from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

export default function Hero() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  // Altezza complessiva della sezione
  const heroHeight = isDesktop ? width * 0.46 : width * 0.9;

  // 🎨 Controllo proporzioni bianco/rosa
  const whiteHeight = heroHeight * 0.20; // ⬅️ meno bianco sopra
  const pinkHeight = heroHeight * 0.80;  // ⬅️ più rosa, arriva fino alla spalla

  return (
    <View style={[styles.container, { height: heroHeight }]}>
      {/* Sfondo bianco sopra */}
      <View style={[styles.whiteBackground, { height: whiteHeight }]} />

      {/* Sfondo rosa sotto */}
      <View
        style={[
          styles.pinkBackground,
          {
            height: pinkHeight * 0.72, // 👈 estendi un po' oltre per coprire l'area
            bottom: heroHeight * 0.1, // 👈 fine rosa perfettamente ai piedi
          },
        ]}
      />

      {/* Immagine modella */}
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
    justifyContent: "flex-end",
    position: "relative",
    backgroundColor: "#fff",
    overflow: "hidden",
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
