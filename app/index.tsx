import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to onboarding after a short delay
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
