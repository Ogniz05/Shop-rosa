import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutValues from "../components/about/AboutValues";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF8F5",
  },
});
