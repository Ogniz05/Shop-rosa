import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AboutValues() {
  const values = [
    { title: "Design", desc: "Minimalismo raffinato e dettagli curati." },
    { title: "Sostenibilità", desc: "Materiali naturali e processi responsabili." },
    { title: "Accessibilità", desc: "Moda di qualità, per tutti i giorni." },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>I nostri valori</Text>
      {values.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDE6DF",
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
    marginBottom: 48,
    textAlign: "center",
  },
  item: {
    borderTopWidth: 1,
    borderTopColor: "#E8E2DC",
    paddingTop: 24,
    marginBottom: 32,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 20,
    color: "#1A1A1A",
    marginBottom: 8,
  },
  desc: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#7A7A7A",
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 380,
  },
});
