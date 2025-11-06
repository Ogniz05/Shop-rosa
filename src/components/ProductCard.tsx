import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ProductCardProps = {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ item }: ProductCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => (navigation as any).navigate("Product", { product: item })}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>€ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: 250,
    backgroundColor: "#f5f5f5",
  },
  info: {
    paddingVertical: 8,
  },
  name: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#111",
  },
  price: {
    fontSize: 13,
    color: "#555",
  },
});
