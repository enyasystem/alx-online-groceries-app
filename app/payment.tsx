import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function PaymentPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 12 }}>
          Payment
        </Text>
        <Text style={{ fontSize: 14, color: "#7C7C7C", marginBottom: 24 }}>
          (Placeholder) Select or add a payment method.
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ backgroundColor: "#53B175", padding: 12, borderRadius: 8 }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
