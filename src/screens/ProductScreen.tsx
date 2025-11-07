import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Footer from "../components/Footer"; // 👈 import del footer
import { PRODUCTS } from "../data/products";

export default function ProductScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const product = PRODUCTS[0];
  const images = [product.image, product.image, product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const recommended = PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 3);

  // 🔽 Animazione menù dettagli
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {/* 🔹 Info prodotto a sinistra */}
        <View style={styles.infoSection}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>€ {product.price}</Text>

          <Text style={styles.sizeLabel}>Taglie disponibili</Text>
          <View style={styles.sizeOptions}>
            {["S", "M", "L", "XL"].map((size) => (
              <TouchableOpacity key={size} style={styles.sizeButton}>
                <Text style={styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 🔽 Menù a tendina */}
          <TouchableOpacity onPress={toggleDropdown}>
            <Text style={styles.dropdownTitle}>Dettagli prodotto</Text>
          </TouchableOpacity>
          <Animated.View
            style={[styles.dropdownContent, { height: heightInterpolation }]}
          >
            <Text style={styles.description}>
              Abito lungo satinato elegante, perfetto per la stagione
              primaverile. Tessuto leggero e morbido, taglio femminile e moderno.
              Made in Italy.
            </Text>
          </Animated.View>

          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartText}>Aggiungi al carrello</Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 Immagini a destra */}
        <View style={styles.imageSection}>
          <Image source={{ uri: selectedImage }} style={styles.mainImage} />

          <View style={styles.sideImages}>
            {images.slice(1).map((img, idx) => (
              <TouchableOpacity key={idx} onPress={() => setSelectedImage(img)}>
                <Image
                  source={{ uri: img }}
                  style={[
                    styles.smallImage,
                    selectedImage === img && styles.activeImage,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* 🔹 Sezione prodotti consigliati */}
      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Consigliati per te</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendedScroll}
        >
          {recommended.map((prod) => (
            <TouchableOpacity key={prod.id} style={styles.recommendedCard}>
              <Image source={{ uri: prod.image }} style={styles.recommendedImage} />
              <Text style={styles.recommendedName}>{prod.name}</Text>
              <Text style={styles.recommendedPrice}>€ {prod.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 👇 Footer in fondo alla pagina */}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 80,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    flexWrap: "wrap",
  },
  infoSection: {
    width: "40%",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
    marginBottom: 6,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  sizeLabel: {
    fontSize: 16,
    color: "#444",
    marginBottom: 8,
    textAlign: "center",
  },
  sizeOptions: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  sizeText: {
    fontSize: 14,
    color: "#333",
  },
  dropdownTitle: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
    marginBottom: 6,
    textAlign: "center",
  },
  dropdownContent: {
    overflow: "hidden",
    width: "100%",
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  cartButton: {
    backgroundColor: "#111",
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 20,
    width: 180,
  },
  cartText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  imageSection: {
    flexDirection: "row",
    width: "55%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  mainImage: {
    width: "72%",
    height: 480,
    borderRadius: 8,
  },
  sideImages: {
    width: "25%",
    justifyContent: "space-between",
    gap: 10,
  },
  smallImage: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    opacity: 0.9,
  },
  activeImage: {
    borderWidth: 2,
    borderColor: "#111",
    opacity: 1,
  },
  recommendedSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  recommendedTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  recommendedScroll: {
    gap: 12,
  },
  recommendedCard: {
    width: 160,
    marginRight: 12,
  },
  recommendedImage: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  recommendedName: {
    fontSize: 14,
    marginTop: 6,
    color: "#222",
  },
  recommendedPrice: {
    fontSize: 13,
    color: "#666",
  },
});
