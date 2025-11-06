import React from "react";
import { StyleSheet, View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
