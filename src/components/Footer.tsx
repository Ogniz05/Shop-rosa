import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

export default function Footer() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  // 👇 handler per link social (placeholder, da aggiornare con i link veri)
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Errore apertura link:", err));
  };

  return (
    <View style={styles.wrapper}>
      {/* --- Sezione superiore --- */}
      <View style={[styles.container, { flexDirection: isDesktop ? "row" : "column" }]}>
        
        {/* 📞 Sezione "Ti serve una mano?" */}
        <View style={styles.column}>
          <Text style={styles.title}>Ti serve una mano?</Text>
          <TouchableOpacity style={styles.socialRow}>
            <FontAwesome name="whatsapp" size={18} color="#000" />
            <Text style={styles.linkBold}> WhatsApp</Text>
          </TouchableOpacity>
          <Text style={styles.smallText}>
            Spedizioni in 24/48h in tutta Italia!
          </Text>
        </View>

        {/* 📚 Sezione "Aiuto" */}
        <View style={styles.column}>
          <Text style={styles.title}>Aiuto</Text>
          <TouchableOpacity><Text style={styles.link}>Pagamenti</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Spedizioni e resi</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Tracciamento ordine</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Carta regalo</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Sostenibilità</Text></TouchableOpacity>
        </View>

        {/* 🏛️ Sezione "Chi siamo" */}
        <View style={styles.column}>
          <Text style={styles.title}>Chi siamo</Text>
          <TouchableOpacity><Text style={styles.link}>La nostra storia</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Lavora con noi</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>I nostri negozi</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Press & Collaborazioni</Text></TouchableOpacity>
        </View>

        {/* 🌐 Sezione Social */}
        <View style={[styles.column, styles.socialColumn]}>
          <Text style={styles.title}>I nostri social</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => openLink("https://instagram.com/")}>
              <FontAwesome name="instagram" size={18} color="#fff" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://facebook.com/")}>
              <FontAwesome name="facebook" size={18} color="#fff" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://tiktok.com/")}>
              <FontAwesome5 name="tiktok" size={18} color="#fff" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* --- Linea divisoria --- */}
      <View style={styles.divider} />

      {/* --- Sezione inferiore legale --- */}
      <View style={[styles.bottomBar, { flexDirection: isDesktop ? "row" : "column" }]}>
        <View style={styles.linksRow}>
          <TouchableOpacity><Text style={styles.bottomLink}>Termini e condizioni</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomLink}>Privacy Policy</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomLink}>Cookie Policy</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomLink}>Mappa del sito</Text></TouchableOpacity>
        </View>

        <View style={styles.bottomInfo}>
          <Text style={styles.bottomText}>Italy | Italiano</Text>
          <Text style={styles.bottomText}>© {new Date().getFullYear()} Rosa Shop</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 40,
  },
  column: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  link: {
    color: "#333",
    fontSize: 13,
    marginBottom: 3,
  },
  linkBold: {
    fontSize: 13,
    color: "#111",
    fontWeight: "600",
  },
  smallText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  socialColumn: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  socialIcons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  icon: {
    backgroundColor: "#111",
    borderRadius: 50,
    padding: 8,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  },
  bottomBar: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  bottomLink: {
    fontSize: 12,
    color: "#444",
  },
  bottomInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  bottomText: {
    fontSize: 12,
    color: "#444",
  },
});
