import { Stack } from "expo-router";

export default function RootLayout() {
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
    </Stack>
  );
}
