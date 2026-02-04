import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Easing,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import CheckoutCard from "../../src/components/CheckoutCard";
import { useCart } from "../../src/context/CartContext";

export default function Cart() {
  const router = useRouter();
  const [showCheckout, setShowCheckout] = useState(false);
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();

  const screenHeight = Dimensions.get("window").height;
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showCheckout) {
      Animated.parallel([
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 450,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showCheckout, backdropOpacity, translateY]);

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: screenHeight,
        duration: 500,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => setShowCheckout(false));
  };

  const subtotal = getTotalPrice();
  const delivery = 7000.0;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 24,
            paddingTop: 32,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#181725",
              marginBottom: 16,
            }}
          >
            My Cart
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              minHeight: 200,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#7C7C7C",
                marginBottom: 16,
              }}
            >
              Your cart is empty
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/explore")}
              style={{
                backgroundColor: "#53B175",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                Start Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Checkout Section */}
        <View
          style={{ borderTopColor: "#E2E2E2", borderTopWidth: 1, padding: 20 }}
        >
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Subtotal</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
              ₦{(0).toLocaleString()}
            </Text>
          </View>
          <View
            style={{
              marginBottom: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Delivery</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
              ₦{delivery.toLocaleString()}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#53B175",
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 24,
          paddingTop: 32,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#181725",
            marginBottom: 24,
          }}
        >
          My Cart
        </Text>

        {/* Cart Items */}
        <View style={{ gap: 20, marginBottom: 24 }}>
          {items.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#F0F0F0",
              }}
            >
              {/* Product Image */}
              <Text style={{ fontSize: 48, marginRight: 12 }}>{item.icon}</Text>

              {/* Product Details */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#181725",
                    marginBottom: 4,
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ fontSize: 14, color: "#7C7C7C" }}>
                  {item.description}
                </Text>
              </View>

              {/* Quantity and Price Container */}
              <View style={{ alignItems: "flex-end", gap: 12 }}>
                {/* Quantity Selector */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F2F3F2",
                    borderRadius: 12,
                    paddingHorizontal: 8,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      width: 32,
                      height: 32,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="minus"
                      size={18}
                      color="#B3B3B3"
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: "#181725",
                      marginHorizontal: 8,
                    }}
                  >
                    {item.quantity}
                  </Text>

                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: 32,
                      height: 32,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="plus"
                      size={18}
                      color="#53B175"
                    />
                  </TouchableOpacity>
                </View>

                {/* Price */}
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#181725",
                  }}
                >
                  ₦{(item.price * item.quantity).toLocaleString()}
                </Text>
              </View>

              {/* Delete Button */}
              <TouchableOpacity
                onPress={() => removeItem(item.id)}
                style={{
                  marginLeft: 12,
                }}
              >
                <MaterialCommunityIcons
                  name="close-circle"
                  size={24}
                  color="#E0E0E0"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Checkout Section */}
      <View
        style={{
          borderTopColor: "#E2E2E2",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 160,
        }}
      >
        <View
          style={{
            marginBottom: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Subtotal</Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
            ₦{subtotal.toLocaleString()}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Delivery</Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
            ₦{delivery.toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowCheckout(true)}
          style={{
            backgroundColor: "#53B175",
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            Go to Checkout
          </Text>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            ₦{total.toLocaleString()}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Modal */}
      <Modal visible={showCheckout} transparent onRequestClose={closeModal}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(0,0,0,0.35)", opacity: backdropOpacity },
            ]}
          />

          <Pressable style={{ flex: 1 }} onPress={closeModal} />

          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              transform: [{ translateY }],
            }}
          >
            <CheckoutCard onClose={closeModal} />
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
