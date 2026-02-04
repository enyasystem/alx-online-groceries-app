import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Cart() {
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
            $0.00
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
            $2.00
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
