import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "@/components/Themed";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>chapters.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to your home screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
