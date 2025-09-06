import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results Screen</Text>
      <Text style={styles.text}>This is where your medical or test results will be shown.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
