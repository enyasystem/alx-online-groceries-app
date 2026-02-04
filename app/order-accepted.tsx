import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";

export default function OrderAccepted() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Decorative soft background blobs */}
      <View style={styles.bgBlob1} />
      <View style={styles.bgBlob2} />

      <View style={styles.content}>
        <View style={styles.iconWrap}>
          <View style={styles.outerCircle}>
            <View style={styles.innerRing}>
              <View style={styles.checkWrap}>
                {/* Pixel-perfect SVG checkmark (thicker) */}
                <Svg
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <Path
                    d="M30 65 L50 85 L90 35"
                    stroke="#fff"
                    strokeWidth={14}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </Svg>
              </View>
            </View>
          </View>

          {/* Decorative dots placed outside the circle with varied sizes */}
          <View
            style={[
              styles.confettiDot,
              {
                backgroundColor: "#53B175",
                left: -10,
                top: -10,
                width: 10,
                height: 10,
              },
            ]}
          />
          <View
            style={[
              styles.confettiDot,
              {
                backgroundColor: "#F2994A",
                right: -12,
                top: -6,
                width: 8,
                height: 8,
              },
            ]}
          />
          <View
            style={[
              styles.confettiDot,
              {
                backgroundColor: "#6FCF97",
                left: -6,
                bottom: -8,
                width: 9,
                height: 9,
              },
            ]}
          />
          <View
            style={[
              styles.confettiDot,
              {
                backgroundColor: "#56CCF2",
                right: -8,
                bottom: -14,
                width: 7,
                height: 7,
              },
            ]}
          />
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
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  outerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  innerRing: {
    width: 156,
    height: 156,
    borderRadius: 78,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.35)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    transform: [{ translateY: -2 }],
  },
  checkWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  boldCheckLayer: {
    position: "absolute",
  },
  confettiDot: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
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
