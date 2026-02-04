import { SafeAreaView, ScrollView, View } from "react-native";
import CheckoutCard from "../src/components/CheckoutCard";

export default function CheckoutPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: 24 }} />
        {/* The visual design places the CheckoutCard at the bottom; here we simply render it full-width */}
      </ScrollView>

      <CheckoutCard />
    </SafeAreaView>
  );
}
