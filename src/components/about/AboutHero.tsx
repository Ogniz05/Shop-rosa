import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function AboutHero() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=1200&q=80",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            About <Text style={styles.bold}>Rosa</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: 600, position: "relative" },
  image: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(250, 248, 245, 0.4)",
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "Inter-Light",
    fontSize: 48,
    color: "#1A1A1A",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 60,
    letterSpacing: -1,
  },
  bold: {
    fontFamily: "Inter-SemiBold",
  },
});
