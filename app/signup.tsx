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

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(text);
    setIsEmailValid(emailRegex.test(text));
  };

  const handleSignup = () => {
    if (username.trim() && email.trim() && password.trim() && isEmailValid) {
      router.push("/select-location");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20 }}
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
          }}
        >
          Sign Up
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
          Enter your credentials to continue
        </Text>

        {/* Username Field */}
        <Text
          style={{
            fontSize: 12,
            color: "#7C7C7C",
            marginBottom: 8,
            fontWeight: "500",
            letterSpacing: 0.5,
          }}
        >
          Username
        </Text>

        <TextInput
          placeholder="Afsar Hossen Shuvo"
          placeholderTextColor="#CCCCCC"
          value={username}
          onChangeText={setUsername}
          style={{
            fontSize: 16,
            color: "#181725",
            paddingVertical: 12,
            borderBottomColor: "#E2E2E2",
            borderBottomWidth: 2,
            marginBottom: 28,
          }}
        />

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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#E2E2E2",
            borderBottomWidth: 2,
            marginBottom: 28,
          }}
        >
          <TextInput
            placeholder="imshuvo97@gmail.com"
            placeholderTextColor="#CCCCCC"
            value={email}
            onChangeText={validateEmail}
            keyboardType="email-address"
            style={{
              flex: 1,
              fontSize: 16,
              color: "#181725",
              paddingVertical: 12,
            }}
          />
          {isEmailValid && (
            <MaterialIcons name="check" size={24} color="#53B175" />
          )}
        </View>

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
            marginBottom: 32,
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

        {/* Terms */}
        <View style={{ marginBottom: 32 }}>
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              lineHeight: 18,
            }}
          >
            By continuing you agree to our{" "}
            <Text style={{ color: "#53B175", fontWeight: "600" }}>
              Terms of Service
            </Text>
            {" "}and{" "}
            <Text style={{ color: "#53B175", fontWeight: "600" }}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={handleSignup}
          disabled={
            !username.trim() || !email.trim() || !password.trim() || !isEmailValid
          }
          style={{
            paddingVertical: 16,
            backgroundColor:
              username.trim() &&
              email.trim() &&
              password.trim() &&
              isEmailValid
                ? "#53B175"
                : "#CCCCCC",
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
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: "#7C7C7C",
            }}
          >
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#53B175",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
