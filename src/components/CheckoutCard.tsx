import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CartContext";

interface CheckoutCardProps {
  delivery?: number;
  onClose?: () => void;
}

export default function CheckoutCard({ delivery = 200, onClose }: CheckoutCardProps) {
  const router = useRouter();
  const { getTotalPrice, clearCart } = useCart();

  const subtotal = getTotalPrice();
  const total = subtotal + delivery;

  const handlePlaceOrder = () => {
    // For now just clear the cart and navigate to a simple confirmation route or home
    clearCart();
    router.push({ pathname: "/(tabs)/explore" });
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Checkout</Text>
        <TouchableOpacity onPress={handleClose} style={{ padding: 6, borderRadius: 20, backgroundColor: "#fff" }}>
          <MaterialIcons name="close" size={20} color="#181725" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F2F2",
        }}
        onPress={() => router.push({ pathname: "/select-location" })}
      >
        <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Delivery</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Select Method</Text>
          <MaterialIcons name="chevron-right" size={20} color="#BDBDBD" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F2F2",
        }}
        onPress={() => router.push({ pathname: "/payment" })}
      >
        <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Payment</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Mastercard</Text>
          <MaterialIcons name="chevron-right" size={20} color="#BDBDBD" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F2F2",
        }}
        onPress={() => router.push({ pathname: "/promo" })}
      >
        <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Promo Code</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Pick discount</Text>
          <MaterialIcons name="chevron-right" size={20} color="#BDBDBD" />
        </View>
      </TouchableOpacity>

      {/* Total Cost row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F2F2",
        }}
      >
        <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Total Cost</Text>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          ₦{total.toLocaleString()}
        </Text>
      </View>

      <Text style={{ fontSize: 12, color: "#7C7C7C", marginVertical: 12 }}>
        By placing an order you agree to our Terms And Conditions
      </Text>

      <TouchableOpacity
        onPress={handlePlaceOrder}
        style={{
          backgroundColor: "#53B175",
          paddingVertical: 16,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}
