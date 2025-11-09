import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AboutMission() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>La nostra missione</Text>
      <Text style={styles.paragraph}>
        Rosa nasce per portare eleganza e comfort nella vita di ogni giorno.
        Capi essenziali, tonalità calde e linee pulite per uno stile naturale,
        contemporaneo e senza tempo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF8F5",
    paddingVertical: 80,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  heading: {
    fontFamily: "Inter-SemiBold",
    fontSize: 26,
    color: "#1A1A1A",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 24,
    textAlign: "center",
  },
  paragraph: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: "#7A7A7A",
    lineHeight: 26,
    maxWidth: 380,
    textAlign: "center",
  },
});
