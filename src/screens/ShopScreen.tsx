import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { PRODUCTS } from "../data/products";

export default function ShopScreen() {
  const { width } = useWindowDimensions();
  const numColumns = width > 1024 ? 3 : width > 768 ? 2 : 1;

  // 🎬 Animazione nativa per opacità + movimento verticale
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y;
    const toValue = offset > 40 ? 1 : 0;

    Animated.timing(fadeAnim, {
      toValue: toValue === 1 ? 0 : 1,
      duration: 180,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: toValue === 1 ? -60 : 0, // sposta verso l’alto
      duration: 180,
      useNativeDriver: true,
    }).start();
  };

  const cardWidth = (width - (numColumns + 1) * 24) / numColumns;
  const cardHeight = cardWidth * 1.4;

  return (
    <View style={styles.container}>
      {/* BOX animato: si muove e svanisce (GPU) */}
      <Animated.View
        style={[
          styles.headerBox,
          {
            opacity: fadeAnim,
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.title}>Tutti i nostri capi</Text>
      </Animated.View>

      {/* Griglia prodotti */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        columnWrapperStyle={
          numColumns > 1 ? { justifyContent: "space-between" } : undefined
        }
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { width: cardWidth, height: cardHeight }]}
            onPress={() => console.log("Vai a prodotto:", item.name)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.new}>NEW NOW</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>€ {item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    zIndex: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  grid: {
    paddingBottom: 120,
    paddingHorizontal: 24,
    rowGap: 24,
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "flex-start",
  },
  new: {
    fontSize: 11,
    fontWeight: "600",
    color: "#999",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 15,
    marginTop: 2,
    color: "#111",
  },
  price: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },
});
