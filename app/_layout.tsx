import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../src/context/AuthContext";
import { CartProvider } from "../src/context/CartContext";
import { FavoritesProvider } from "../src/context/FavoritesContext";

function RootLayoutNav() {
  const { isSignedIn, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const currentRoute = segments[0];

    // If user is signed in, allow them to access the main app
    if (isSignedIn) {
      if (
        currentRoute === "onboarding" ||
        currentRoute === "signin" ||
        currentRoute === "signup" ||
        currentRoute === "verify-phone" ||
        currentRoute === "verify-otp"
      ) {
        // Redirect away from auth screens to home
        router.replace("/(tabs)");
      }
      // Allow select-location for signed-in users
    } else {
      // User is not signed in
      if (!currentRoute) {
        // Only redirect on initial load
        router.replace("/onboarding");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn, isLoading]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="verify-phone" />
      <Stack.Screen name="verify-otp" />
      <Stack.Screen name="select-location" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="product-details" />
      <Stack.Screen name="category-products" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <RootLayoutNav />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}
