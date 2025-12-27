import { View, Text, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This screen doesn't exist.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});

