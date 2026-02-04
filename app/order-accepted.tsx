import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function OrderAccepted() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Decorative soft background blobs */}
      <View style={styles.bgBlob1} />
      <View style={styles.bgBlob2} />

      <View style={styles.content}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons name="check" size={96} color="#fff" />
        </View>

        <Text style={styles.title}>Your Order has been accepted</Text>

        <Text style={styles.subtitle}>
          Your items have been placed and are on their way to being processed
        </Text>

        <TouchableOpacity
          onPress={() => router.push({ pathname: "/(tabs)/account" })}
          style={styles.trackButton}
        >
          <Text style={styles.trackButtonText}>Track Order</Text>
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
    backgroundColor: "#fff",
  },
  bgBlob1: {
    position: "absolute",
    top: -80,
    left: -60,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(83,177,117,0.06)",
  },
  bgBlob2: {
    position: "absolute",
    bottom: -100,
    right: -80,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: "rgba(246, 180, 177, 0.06)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  iconWrap: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#181725",
  },
  subtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 36,
    maxWidth: 340,
  },
  trackButton: {
    backgroundColor: "#53B175",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 28,
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
    marginBottom: 16,
  },
  trackButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  backText: {
    color: "#181725",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },
});
