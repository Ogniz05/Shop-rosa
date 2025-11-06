import React from "react";
import { ScrollView, StyleSheet, useWindowDimensions, View } from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/product";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const paddingHorizontal = isDesktop ? 40 : 16;

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />

      {/* 👇 Sezione prodotti — sotto la Hero, sfondo bianco */}
      <View
        style={[
          styles.gridContainer,
          {
            paddingHorizontal,
          },
        ]}
      >
        {PRODUCTS.map((item: Product) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUri={item.image}
            onPress={() => console.log("Vai al prodotto:", item.name)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 40, // 👈 inizia dopo la Hero
    marginBottom: 60,
  },
});
