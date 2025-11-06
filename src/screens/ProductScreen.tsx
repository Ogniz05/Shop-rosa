import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../components/Footer";

const { width, height } = Dimensions.get("window");
const isDesktop = width >= 900;

export default function ProductScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item }: any = route.params || {};
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!item) return null;

  const productImages = [
    item.image,
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900",
    "https://images.unsplash.com/photo-1544441893-675973e31985?w=900",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.content, isDesktop && styles.rowLayout]}>
        {/* --- COLONNA SINISTRA --- */}
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>€ {item.price}</Text>

          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>Taglia</Text>
            <View style={styles.sizeOptions}>
              {["S", "M", "L", "XL"].map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.sizeTextSelected,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Text style={styles.description}>
            Un capo essenziale della collezione Shop Rosa, pensato per una donna
            moderna e raffinata. Realizzato con materiali di alta qualità per
            garantire comfort e stile in ogni occasione.
          </Text>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Aggiungi al carrello</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Torna indietro</Text>
          </TouchableOpacity>
        </View>

        {/* --- GALLERIA --- */}
        <View style={styles.gallery}>
          <Image source={{ uri: productImages[0] }} style={styles.mainImage} />

          <View style={styles.sideColumn}>
            <Image source={{ uri: productImages[1] }} style={styles.smallImage} />
            <Image source={{ uri: productImages[2] }} style={styles.smallImage} />
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 60,
  },
  content: {
    flexDirection: "column",
    padding: 24,
    gap: 24,
  },
  rowLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: 1300,
    marginHorizontal: "auto",
  },

  /** INFO **/
  info: {
    flex: 0.8,
    paddingRight: isDesktop ? 40 : 0,
  },
  name: {
    fontSize: 24,
    color: "#111",
    textTransform: "uppercase",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 18,
    color: "#555",
    marginBottom: 16,
  },
  sizeContainer: {
    marginBottom: 20,
  },
  sizeLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  sizeOptions: {
    flexDirection: "row",
    gap: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  sizeSelected: {
    borderColor: "#111",
    backgroundColor: "#111",
  },
  sizeText: {
    color: "#333",
    fontSize: 14,
  },
  sizeTextSelected: {
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 24,
  },
  addButton: {
    backgroundColor: "#111",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 13,
  },
  backBtn: {
    marginTop: 24,
  },
  backText: {
    color: "#666",
    textAlign: "left",
  },

  /** GALLERIA (ridotta in altezza, visibile interamente senza scroll) **/
  gallery: {
    flex: 1.3,
    flexDirection: "row",
    gap: 10,
    alignItems: "stretch",
    paddingRight: 20,
    height: isDesktop ? height * 0.7 : "auto", // 👈 proporzione ridotta
  },
  mainImage: {
    flex: 1,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    resizeMode: "cover",
  },
  sideColumn: {
    flex: 0.55,
    justifyContent: "space-between",
    gap: 10,
  },
  smallImage: {
    width: "100%",
    height: "48%", // 👈 due immagini visibili senza scorrere
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    resizeMode: "cover",
  },
});
