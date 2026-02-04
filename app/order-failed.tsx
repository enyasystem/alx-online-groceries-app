import { useRouter } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function OrderFailed() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.close} onPress={() => router.back()}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <View style={styles.imageWrap}>
          {/* Placeholder illustration - keep as Image or colored box */}
          <View style={styles.illustration} />
        </View>

        <Text style={styles.title}>Oops! Order Failed</Text>
        <Text style={styles.subtitle}>Something went terribly wrong.</Text>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => router.replace("/(tabs)/cart")}
        >
          <Text style={styles.retryText}>Please Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push({ pathname: "/(tabs)/explore" })}
        >
          <Text style={styles.backText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.04)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  close: {
    position: "absolute",
    left: 12,
    top: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: { fontSize: 20, color: "#181725" },
  imageWrap: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#EAF7EF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  illustration: {
    width: 96,
    height: 96,
    backgroundColor: "#D1F0D6",
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 6,
    marginBottom: 8,
    color: "#181725",
  },
  subtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#53B175",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 28,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  retryText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  backText: { color: "#181725", fontSize: 14, marginTop: 6 },
});
