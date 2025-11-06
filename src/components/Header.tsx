import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

const MENU_ITEMS = [
  { label: "Home", route: "Home" },
  { label: "Shop", route: "Product" },
  { label: "About Us", route: "About" },
];

export default function Header() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrap}>
      <View style={styles.bar}>
        {/* Left Section */}
        <View style={styles.side}>
          {isDesktop ? (
            <View style={styles.leftMenu}>
              {MENU_ITEMS.map((item) => (
                <TouchableOpacity key={item.label} onPress={() => console.log(item.route)}>
                  <Text style={styles.menuLink}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Ionicons name="menu-outline" size={24} color="#111" />
            </TouchableOpacity>
          )}
        </View>

        {/* Center Logo */}
        <View style={styles.center}>
          <Text style={styles.logo}>SHOP ROSA</Text>
        </View>

        {/* Right Section */}
        <View style={[styles.side, styles.rightSide]}>
          <TouchableOpacity onPress={() => console.log("Cart")} style={styles.iconBtn}>
            <Ionicons name="bag-outline" size={22} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Login")} style={styles.iconBtn}>
            <Ionicons name="person-outline" size={22} color="#111" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Mobile Overlay Menu */}
      {!isDesktop && (
        <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
          <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
            <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
              <View style={styles.sheetHeader}>
                <Text style={styles.sheetTitle}>Menu</Text>
                <TouchableOpacity onPress={() => setOpen(false)}>
                  <Ionicons name="close" size={24} color="#111" />
                </TouchableOpacity>
              </View>
              {MENU_ITEMS.map((item) => (
                <TouchableOpacity
                  key={item.label}
                  onPress={() => {
                    console.log("Go to:", item.route);
                    setOpen(false);
                  }}
                  style={styles.sheetItem}
                >
                  <Text style={styles.sheetItemText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.mobileBottom}>
                <TouchableOpacity style={styles.mobileBtn}>
                  <Ionicons name="bag-outline" size={20} color="#111" />
                  <Text style={styles.mobileBtnText}>Carrello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mobileBtn}>
                  <Ionicons name="person-outline" size={20} color="#111" />
                  <Text style={styles.mobileBtnText}>Login</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    paddingHorizontal: 16,
  },
  side: {
    width: "30%", // 👈 così destra e sinistra occupano spazio uguale
    flexDirection: "row",
    alignItems: "center",
  },
  rightSide: {
    justifyContent: "flex-end",
  },
  leftMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  menuLink: {
    fontSize: 14,
    color: "#111",
    letterSpacing: 1,
  },
  center: {
    width: "40%",
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    fontFamily: "serif",
    letterSpacing: 1,
  },
  iconBtn: {
    padding: 4,
    marginLeft: 12,
  },

  // Mobile overlay
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
  },
  sheet: {
    backgroundColor: "#fff",
    width: "75%",
    height: "100%",
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  sheetItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  sheetItemText: {
    fontSize: 16,
    color: "#111",
  },
  mobileBottom: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 20,
    gap: 16,
  },
  mobileBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mobileBtnText: {
    fontSize: 16,
    color: "#111",
  },
});
