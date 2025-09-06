import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Enable Notifications</Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});
