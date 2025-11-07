import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from "react-native";
import Footer from "../components/Footer";

export default function AboutScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🔹 HERO SECTION */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>La Nostra Storia</Text>
        <Text style={styles.heroSubtitle}>
          Eleganza, semplicità e autenticità — il cuore di Rosa Shop.
        </Text>
      </View>

      {/* 🔹 SECTION 1 */}
      <View style={[styles.section, isDesktop && styles.sectionRow]}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
          }}
          style={[styles.image, isDesktop && styles.imageLarge]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Chi Siamo</Text>
          <Text style={styles.text}>
            Rosa Shop nasce dall’amore per la moda minimal e raffinata.
            Crediamo che ogni capo debba raccontare una storia, fatta di cura,
            attenzione ai dettagli e rispetto per i materiali. Ogni collezione è
            pensata per valorizzare la naturale eleganza di chi la indossa.
          </Text>
        </View>
      </View>

      {/* 🔹 SECTION 2 */}
      <View
        style={[styles.section, isDesktop && styles.sectionRowReverse]}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1556228578-454e4a8cd0bf?w=800",
          }}
          style={[styles.image, isDesktop && styles.imageLarge]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>I Nostri Valori</Text>
          <Text style={styles.text}>
            Promuoviamo una moda consapevole, sostenibile e inclusiva. I nostri
            capi sono realizzati con materiali di alta qualità, privilegiando
            la produzione locale e rispettando le persone che li creano.
          </Text>
        </View>
      </View>

      {/* 🔹 SECTION 3 */}
      <View style={[styles.section, isDesktop && styles.sectionRow]}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
          }}
          style={[styles.image, isDesktop && styles.imageLarge]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>La Nostra Visione</Text>
          <Text style={styles.text}>
            Il nostro obiettivo è creare un’esperienza di shopping autentica e
            accessibile, in cui ogni persona possa sentirsi unica, sicura e
            rappresentata dal proprio stile.
          </Text>
        </View>
      </View>

      {/* 🔹 FOOTER */}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8DAD1",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
  },
  heroSubtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    maxWidth: 600,
  },
  section: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionRowReverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 280,
    borderRadius: 10,
  },
  imageLarge: {
    width: "50%",
    height: 400,
  },
  textContainer: {
    flex: 1,
    maxWidth: 500,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
  },
});
