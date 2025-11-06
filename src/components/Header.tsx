import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity><Text style={styles.link}>Home</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>Shop</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>About</Text></TouchableOpacity>
      </View>

      <Text style={styles.title}>Rosa Shop</Text>

      <View style={styles.right}>
        <TouchableOpacity><Text style={styles.link}>🛒</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>Login</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
    position: "relative",
    backgroundColor: "#fff",
  },
  left: {
    flexDirection: "row",
    gap: 18,
    paddingLeft: 20,
  },
  right: {
    flexDirection: "row",
    gap: 18,
    paddingRight: 20,
  },
  link: {
    fontSize: 14,
    color: "#333",
    textTransform: "uppercase",
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
