import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function OrderAccepted() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <View
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
              backgroundColor: "#53B175",
              alignItems: "center",
              justifyContent: "center",
              elevation: 6,
            }}
          >
            <MaterialCommunityIcons name="check" size={80} color="#fff" />
          </View>
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Your Order has been accepted
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#7C7C7C",
            textAlign: "center",
            marginBottom: 36,
            maxWidth: 320,
          }}
        >
          Your items has been placed and is on its way to being processed
        </Text>

        <TouchableOpacity
          onPress={() => router.push({ pathname: "/(tabs)/account" })}
          style={{
            backgroundColor: "#53B175",
            paddingVertical: 16,
            paddingHorizontal: 32,
            borderRadius: 14,
            width: "100%",
            maxWidth: 420,
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
            Track Order
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push({ pathname: "/(tabs)/explore" })}
        >
          <Text style={{ color: "#181725", fontSize: 16, fontWeight: "600" }}>
            Back to home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
