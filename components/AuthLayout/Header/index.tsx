import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import React from "react";

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>chapters.</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    gap: 12,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

