import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AboutCTA() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scopri la nuova collezione</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B09B84",
    paddingVertical: 100,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 22,
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    color: "#1A1A1A",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
