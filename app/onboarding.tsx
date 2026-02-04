import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";

export default function Onboarding() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/(tabs)/index");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
      >
        {/* Hero Image */}
        <View
          style={{
            flex: 1.3,
            width: "100%",
            borderRadius: 32,
            overflow: "hidden",
            marginBottom: 20,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Image
            source={require("../assets/images/onboarding-hero.jpg")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>

        {/* Content */}
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#181725",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Welcome to our store
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#7C7C7C",
              textAlign: "center",
              marginBottom: 32,
              lineHeight: 24,
            }}
          >
            Get your groceries in as fast as one hour
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity
            onPress={handleGetStarted}
            style={{
              backgroundColor: "#53B175",
              paddingVertical: 16,
              paddingHorizontal: 40,
              borderRadius: 19,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
