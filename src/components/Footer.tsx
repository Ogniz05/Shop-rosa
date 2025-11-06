import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Shop Rosa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#777",
    fontSize: 12,
  },
});
