import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Home() {
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
          Welcome
        </Text>

        <View
          style={{
            backgroundColor: "#E8F5E9",
            padding: 20,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#53B175",
              marginBottom: 8,
            }}
          >
            🎉 Fresh Groceries Available
          </Text>
          <Text style={{ fontSize: 14, color: "#7C7C7C" }}>
            Get your fresh groceries delivered in one hour
          </Text>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#181725",
            marginBottom: 12,
          }}
        >
          Popular Items
        </Text>

        <View style={{ marginBottom: 20 }}>
          {[1, 2, 3, 4].map((item) => (
            <View
              key={item}
              style={{
                backgroundColor: "#F7F7F7",
                padding: 12,
                borderRadius: 8,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}
                >
                  Fresh Produce {item}
                </Text>
                <Text style={{ fontSize: 14, color: "#7C7C7C", marginTop: 4 }}>
                  $5.99
                </Text>
              </View>
              <Text style={{ fontSize: 24 }}>🥕</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
