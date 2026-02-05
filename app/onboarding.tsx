import { useRouter } from "expo-router";
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Onboarding() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/signin");
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
        {/* Stacked Hero Images (reusing existing photo) */}
        <View
          style={{
            flex: 1.3,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: "86%",
              height: 320,
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            {/* Back card - larger rotation */}
            <View
              style={{
                position: "absolute",
                width: "74%",
                height: "74%",
                borderRadius: 22,
                overflow: "hidden",

                transform: [
                  { rotate: "-20deg" },
                  { translateX: -36 },
                  { translateY: -12 },
                ],
                backgroundColor: "#fff",
                elevation: 2,
                shadowColor: "#000",
                shadowOpacity: 0.06,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 4 },
                zIndex: 1,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.04)",
              }}
            >
              <Image
                source={require("../assets/images/onboarding-hero.jpg")}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </View>

            {/* Middle card - rotated right slightly and visible */}
            <View
              style={{
                position: "absolute",
                width: "82%",
                height: "82%",
                borderRadius: 24,
                overflow: "hidden",
                transform: [
                  { rotate: "0deg" },
                  { translateX: -8 },
                  { translateY: -10 },
                ],
                backgroundColor: "#fff",
                elevation: 4,
                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 6 },
                zIndex: 2,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.05)",
              }}
            >
              <Image
                source={require("../assets/images/onboarding-hero.jpg")}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </View>

            {/* Front card - slightly scaled with stronger shadow */}
            <View
              style={{
                position: "absolute",
                width: "90%",
                height: "90%",
                borderRadius: 26,
                overflow: "hidden",
                transform: [
                  { rotate: "12deg" },
                  { translateX: 12 },
                  { translateY: 6 },
                  { scale: 1.02 },
                ],
                backgroundColor: "#fff",
                elevation: 10,
                shadowColor: "#000",
                shadowOpacity: 0.18,
                shadowRadius: 18,
                shadowOffset: { width: 0, height: 10 },
                zIndex: 3,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <Image
                source={require("../assets/images/onboarding-hero.jpg")}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </View>
          </View>
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
