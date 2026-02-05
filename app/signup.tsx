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
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [touched, setTouched] = useState({ username: false, email: false, password: false });

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(text);
    const valid = emailRegex.test(text);
    setIsEmailValid(valid);
    if (!text) setEmailError("Email is required");
    else setEmailError(valid ? null : "Enter a valid email");
  };

  const validateUsername = (text: string) => {
    setUsername(text);
    if (!text.trim()) setUsernameError("Username is required");
    else if (text.trim().length < 3) setUsernameError("Username must be at least 3 characters");
    else setUsernameError(null);
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    if (!text) setPasswordError("Password is required");
    else if (text.length < 8) setPasswordError("Password must be at least 8 characters");
    else if (!/\d/.test(text)) setPasswordError("Password must include at least one number");
    else setPasswordError(null);
  };

  const handleSignup = () => {
    // reveal errors if user tries to submit
    setTouched({ username: true, email: true, password: true });

    const formIsValid =
      !usernameError && !emailError && !passwordError &&
      username.trim() && email.trim() && password.trim() && isEmailValid;

    if (formIsValid) {
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
          placeholder="Username"
          placeholderTextColor="#CCCCCC"
          value={username}
          onChangeText={validateUsername}
          onBlur={() => setTouched((s) => ({ ...s, username: true }))}
          style={{
            fontSize: 16,
            color: "#181725",
            paddingVertical: 12,
            borderBottomColor: "#E2E2E2",
            borderBottomWidth: 2,
            marginBottom: 28,
          }}
        />
        {touched.username && usernameError ? (
          <Text style={{ color: "#FF4D4F", marginTop: -20, marginBottom: 24 }}>{usernameError}</Text>
        ) : null}

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
            placeholder="example@email.com"
            placeholderTextColor="#CCCCCC"
            value={email}
              onChangeText={validateEmail}
              onBlur={() => setTouched((s) => ({ ...s, email: true }))}
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
          {touched.email && emailError ? (
            <Text style={{ color: "#FF4D4F", marginTop: -20, marginBottom: 24 }}>{emailError}</Text>
          ) : null}

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
            onChangeText={validatePassword}
            onBlur={() => setTouched((s) => ({ ...s, password: true }))}
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
        {touched.password && passwordError ? (
          <Text style={{ color: "#FF4D4F", marginTop: -20, marginBottom: 24 }}>{passwordError}</Text>
        ) : null}

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
            </Text>{" "}
            and{" "}
            <Text style={{ color: "#53B175", fontWeight: "600" }}>
              Privacy Policy.
            </Text>
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={handleSignup}
          disabled={
            !username.trim() ||
            !email.trim() ||
            !password.trim() ||
            !isEmailValid
          }
          accessibilityState={{ disabled: !username.trim() || !email.trim() || !password.trim() || !isEmailValid }}
          style={{
            paddingVertical: 16,
            backgroundColor:
              username.trim() && email.trim() && password.trim() && isEmailValid
                ? "#53B175"
                : "#CCCCCC",
            borderRadius: 19,
            alignItems: "center",
            marginBottom: 20,
            opacity: username.trim() && email.trim() && password.trim() && isEmailValid ? 1 : 0.7,
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
