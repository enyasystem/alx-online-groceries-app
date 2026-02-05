import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
  });
  const [formValid, setFormValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isUsernameOk = username.trim().length >= 3;
  const isPasswordLenOk = password.length >= 8;
  const isPasswordHasNumber = /\d/.test(password);
  const isPasswordOk = isPasswordLenOk && isPasswordHasNumber;
  const isEmailOk = emailRegex.test(email);

  useEffect(() => {
    const ok = isUsernameOk && isEmailOk && isPasswordOk;
    setFormValid(ok);
  }, [isUsernameOk, isEmailOk, isPasswordOk]);

  const insets = useSafeAreaInsets();
  // Compute button style once at component level so it updates on every render
  const signUpButtonStyle = {
    paddingVertical: 16,
    borderRadius: 19,
    alignItems: "center" as const,
    // Keep a small fixed bottom margin; large insets should be handled on the ScrollView instead
    marginBottom: 12,
    backgroundColor: formValid ? "#53B175" : "#CCCCCC",
  };

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const clean = text.trim();
    setEmail(clean);
    const valid = emailRegex.test(clean);
    setIsEmailValid(valid);
    if (!clean) setEmailError("Email is required");
    else setEmailError(valid ? null : "Enter a valid email");
  };

  const validateUsername = (text: string) => {
    setUsername(text);
    if (!text.trim()) setUsernameError("Username is required");
    else if (text.trim().length < 3)
      setUsernameError("Username must be at least 3 characters");
    else setUsernameError(null);
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    if (!text) setPasswordError("Password is required");
    else if (text.length < 8)
      setPasswordError("Password must be at least 8 characters");
    else if (!/\d/.test(text))
      setPasswordError("Password must include at least one number");
    else setPasswordError(null);
  };

  const handleSignup = async () => {
    // reveal errors if user tries to submit
    setTouched({ username: true, email: true, password: true });

    const formIsValid =
      !usernameError &&
      !emailError &&
      !passwordError &&
      username.trim() &&
      email.trim() &&
      password.trim() &&
      isEmailValid;

    if (!formIsValid) return;

    const userData = {
      id: Date.now().toString(),
      name: username.trim(),
      email: email.trim(),
      phone: "",
      location: "",
    };

    // Don't persist user yet — send to select-location so they can pick a location first.
    try {
      router.push({
        pathname: "/select-location",
        params: { userData: JSON.stringify(userData) },
      });
    } catch (e) {
      console.error("Navigation to select-location failed:", e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 12,
            // Add safe area bottom inset but cap it so very large insets don't push content off-screen
            paddingBottom: Math.min(insets.bottom + (Platform.OS === "ios" ? 80 : 24), 80),
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Carrot Icon */}
          <View
            style={{
              alignItems: "center",
              marginVertical: 16,
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
              marginBottom: 16,
              lineHeight: 20,
            }}
          >
            Enter your credentials to continue
          </Text>

          {/* Username Field */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 4,
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
              paddingVertical: 8,
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 2,
              marginBottom: 12,
            }}
          />
          {touched.username && usernameError ? (
            <Text
              style={{ color: "#FF4D4F", marginTop: -20, marginBottom: 24 }}
            >
              {usernameError}
            </Text>
          ) : null}

          {/* Username hint */}
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 12,
                color: isUsernameOk ? "#53B175" : "#9B9B9B",
                marginBottom: 4,
              }}
            >
              {isUsernameOk ? "✓" : "○"} At least 3 characters
            </Text>
          </View>

          {/* Email Field */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 4,
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
              marginBottom: 16,
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
            <Text
              style={{ color: "#FF4D4F", marginTop: -20, marginBottom: 24 }}
            >
              {emailError}
            </Text>
          ) : null}

          {/* Email hint */}
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 12,
                color: isEmailOk ? "#53B175" : "#9B9B9B",
              }}
            >
              {isEmailOk ? "✓" : "○"} Valid email address
            </Text>
          </View>

          {/* Password Field */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 4,
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
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{ paddingLeft: 12 }}
              android_ripple={{ color: "transparent" }}
              accessibilityLabel={
                showPassword ? "Hide password" : "Show password"
              }
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#7C7C7C"
              />
            </Pressable>
          </View>
          {touched.password && passwordError ? (
            <Text
              style={{ color: "#FF4D4F", marginTop: -20, marginBottom: 24 }}
            >
              {passwordError}
            </Text>
          ) : null}

          {/* Password rule hints */}
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 12,
                color: isPasswordLenOk ? "#53B175" : "#9B9B9B",
                marginBottom: 4,
              }}
            >
              {isPasswordLenOk ? "✓" : "○"} At least 8 characters
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: isPasswordHasNumber ? "#53B175" : "#9B9B9B",
              }}
            >
              {isPasswordHasNumber ? "✓" : "○"} Includes a number
            </Text>
          </View>

          {/* Terms */}
          <View style={{ marginBottom: 12 }}>
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
            onPress={() => {
              if (!formValid) return;
              handleSignup();
            }}
            disabled={!formValid}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityState={{ disabled: !formValid }}
            style={[
              signUpButtonStyle,
              {
                backgroundColor: formValid ? "#53B175" : "#CCCCCC",
                opacity: formValid ? 1 : 0.85,
              },
            ]}
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

          {/* Form status indicator for debugging */}
          <View style={{ alignItems: "center", marginBottom: 8 }}>
            <Text style={{ color: formValid ? "#53B175" : "#9B9B9B" }}>
              {formValid ? "Ready to sign up" : "Complete fields to enable"}
            </Text>
          </View>

          {/* Login Link */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#7C7C7C",
              }}
            >
              Already have an account?{" "}
            </Text>
            <Pressable
              onPress={() => router.push("/login")}
              android_ripple={{ color: "transparent" }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#53B175",
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
