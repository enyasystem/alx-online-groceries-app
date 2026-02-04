import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Explore() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 16 }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#181725",
            marginBottom: 16,
          }}
        >
          Explore
        </Text>

        <Text style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 20 }}>
          Browse our wide selection of fresh groceries by category
        </Text>

        <View>
          {["Fruits", "Vegetables", "Dairy", "Meat", "Bakery"].map(
            (category, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#F7F7F7",
                  padding: 16,
                  borderRadius: 12,
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "600", color: "#181725" }}
                >
                  {category}
                </Text>
                <Text style={{ fontSize: 14, color: "#7C7C7C", marginTop: 4 }}>
                  Browse {category.toLowerCase()} →
                </Text>
              </View>
            ),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
