import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

const width = Dimensions.get("window").width;

export default function HomeScreen() {
  const isDesktop = width > 768;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero principale */}
      <Hero />

      {/* Titolo sezione */}
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>I più venduti</Text>
      </View>

      {/* Griglia prodotti */}
      <View style={[styles.grid, { gap: isDesktop ? 20 : 10 }]}>
        {PRODUCTS.slice(0, 6).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>

      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 60,
  },
  sectionHeader: {
    alignItems: "center",
    marginVertical: 24,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#111",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});
