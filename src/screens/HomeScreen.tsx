import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { bestsellers } from "../data/bestsellers";
import type { RootStackParamList } from "../navigation/AppNavigator";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isDesktop = width >= 768;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />

      <ScrollView contentContainerStyle={styles.container}>
        <Hero />

        {/* Titolo sezione */}
        <View style={styles.textWrap}>
          <Text style={styles.sectionTitle}>I più venduti</Text>
          <Text style={styles.sectionSubtitle}>
            Scopri i capi più amati dalle nostre clienti
          </Text>
        </View>

        {/* Card prodotti */}
        <View
          style={[
            styles.grid,
            { flexDirection: isDesktop ? "row" : "row", flexWrap: "wrap" },
          ]}
        >
          {bestsellers.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Product", { item })}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>€ {item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 60,
  },
  textWrap: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  grid: {
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    width: width / 2.3,
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 260,
  },
  cardInfo: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: "#111",
    textTransform: "uppercase",
  },
  cardPrice: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },
});
