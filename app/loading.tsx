import { ActivityIndicator } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useAuth } from "../src/context/AuthContext";

export default function Loading() {
  const route = useRoute();
  const router = useRouter();
  const { signIn } = useAuth();

  useEffect(() => {
    const params = (route.params as any) || {};
    const userData = params.userData ? JSON.parse(params.userData) : null;

    (async () => {
      if (!userData) {
        // Nothing to persist — go to app
        router.replace("/(tabs)");
        return;
      }

      try {
        await signIn(userData);
        // After persisting user, redirect to main tabs
        router.replace("/(tabs)");
      } catch (e) {
        console.error("Failed to persist user during loading:", e);
        // On error, send back to onboarding to retry
        router.replace("/onboarding");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#53B175" />
        <Text style={{ marginTop: 16, color: "#181725", fontWeight: "600" }}>
          Finalizing setup...
        </Text>
      </View>
    </SafeAreaView>
  );
}
