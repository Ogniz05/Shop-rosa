import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Sezione sinistra */}
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => navigation.navigate("Home" as never)}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Shop" as never)}>
          <Text style={styles.link}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About" as never)}>
          <Text style={styles.link}>About Us</Text>
        </TouchableOpacity>
      </View>

      {/* Logo centrato */}
      <Text style={styles.logo}>ROSA SHOP</Text>

      {/* Sezione destra */}
      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Text style={styles.link}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
  },
  leftSection: {
    flexDirection: "row",
    gap: 16,
  },
  rightSection: {
    flexDirection: "row",
    gap: 16,
  },
  logo: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#111",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -45 }], // centratura precisa
  },
  link: {
    fontSize: 14,
    color: "#111",
    textTransform: "uppercase",
  },
});
