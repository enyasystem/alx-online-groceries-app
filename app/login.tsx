import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      router.push("/select-location");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 24,
          paddingBottom: 80,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Carrot Icon */}
        <View
          style={{
            alignItems: "center",
            marginVertical: 32,
          }}
        >
          <Text style={{ fontSize: 64 }}>🥕</Text>
        </View>

        {/* Title */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: "#181725",
            marginBottom: 8,
            lineHeight: 36,
            textAlign: "center",
          }}
        >
          Login
        </Text>

        {/* Subtitle */}
        <Text
          style={{
            fontSize: 14,
            color: "#7C7C7C",
            marginBottom: 32,
            lineHeight: 21,
          }}
        >
          Enter your emails and password
        </Text>

        {/* Email Field */}
        <Text
          style={{
            fontSize: 12,
            color: "#7C7C7C",
            marginBottom: 8,
            fontWeight: "500",
            letterSpacing: 0.5,
          }}
        >
          Email
        </Text>

        <TextInput
          placeholder="example@email.com"
          placeholderTextColor="#CCCCCC"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{
            fontSize: 16,
            color: "#181725",
            paddingVertical: 12,
            borderBottomColor: "#E2E2E2",
            borderBottomWidth: 2,
            marginBottom: 28,
          }}
        />

        {/* Password Field */}
        <Text
          style={{
            fontSize: 12,
            color: "#7C7C7C",
            marginBottom: 8,
            fontWeight: "500",
            letterSpacing: 0.5,
          }}
        >
          Password
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#E2E2E2",
            borderBottomWidth: 2,
            marginBottom: 16,
          }}
        >
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#CCCCCC"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={{
              flex: 1,
              fontSize: 16,
              color: "#181725",
              paddingVertical: 12,
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ paddingLeft: 12 }}
          >
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#7C7C7C"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={{ marginBottom: 32 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#181725",
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          disabled={!email.trim() || !password.trim()}
          style={{
            paddingVertical: 16,
            backgroundColor:
              email.trim() && password.trim() ? "#53B175" : "#CCCCCC",
            borderRadius: 19,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: "#7C7C7C",
            }}
          >
            Don&apos;t have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#53B175",
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
