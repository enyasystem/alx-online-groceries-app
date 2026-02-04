import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Favorites() {
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
          My Favorites
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#7C7C7C",
              marginBottom: 8,
            }}
          >
            ♡ No favorites yet
          </Text>
          <Text style={{ fontSize: 14, color: "#7C7C7C", textAlign: "center" }}>
            Save your favorite items for quick access later
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
