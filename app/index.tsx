import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Animated, SafeAreaView, Text, View } from "react-native";
import { useAuth } from "../src/context/AuthContext";

export default function SplashScreen() {
  const router = useRouter();
  const { isSignedIn, isLoading } = useAuth();
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animate progress bar
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    // Navigate after 2.5 seconds
    const timer = setTimeout(() => {
      if (isLoading) return;

      if (isSignedIn) {
        router.replace("/(tabs)");
      } else {
        router.replace("/onboarding");
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [router, progress, isSignedIn, isLoading]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "70%"],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#53B175" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        {/* Logo + Carrot in Row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          {/* Carrot Icon */}
          <Text style={{ fontSize: 52, color: "#fff", marginRight: 12 }}>
            🥕
          </Text>

          {/* Nectar Text */}
          <Text
            style={{
              fontSize: 56,
              fontWeight: "800",
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            nectar
          </Text>
        </View>

        {/* Tagline */}
        <Text
          style={{
            fontSize: 13,
            color: "#fff",
            letterSpacing: 2.5,
            opacity: 0.9,
          }}
        >
          online groceries
        </Text>
      </View>

      {/* Loading Bar */}
      <View
        style={{
          height: 3,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          marginHorizontal: 40,
          marginBottom: 60,
          borderRadius: 2,
        }}
      >
        <Animated.View
          style={{
            height: "100%",
            backgroundColor: "#fff",
            width: progressWidth,
            borderRadius: 2,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
