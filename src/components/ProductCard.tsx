import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  imageUri: string;
  onPress?: () => void;
};

export default function ProductCard({ name, price, imageUri, onPress }: ProductCardProps) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const cardWidth = isDesktop ? width * 0.22 : width * 0.46;

  return (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUri }} style={[styles.image, { height: cardWidth * 1.3 }]} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>€ {price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f6f6f6",  // più soft, tipo carta fotografica
    marginBottom: 28,
    borderRadius: 6,
    overflow: "hidden",
  },
  imageWrapper: {
    backgroundColor: "#eaeaea", // 👈 leggermente diverso per effetto “box neutro”
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  info: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  name: {
    fontSize: 14,
    color: "#111",
    fontFamily: "serif",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 13,
    color: "#555",
    marginTop: 3,
  },
});
