import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const KEYPAD_KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["+", "0", "⌫"],
];

export default function VerifyOTP() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleKeyPress = (key: string) => {
    if (key === "⌫") {
      setCode(code.slice(0, -1));
    } else if (code.length < 4) {
      setCode(code + key);
    }
  };

  const handleContinue = () => {
    if (code.length === 4) {
      router.push("/(tabs)/index");
    }
  };

  const handleResendCode = () => {
    setCode("");
    // TODO: Trigger resend code API
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#F0F0F0",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ paddingRight: 16 }}
          >
            <MaterialIcons name="arrow-back" size={28} color="#181725" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 32 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              color: "#181725",
              marginBottom: 28,
              lineHeight: 36,
            }}
          >
            Enter your{"\n"}4-digit code
          </Text>

          {/* Label */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 16,
              fontWeight: "500",
              letterSpacing: 0.5,
            }}
          >
            Code
          </Text>

          {/* Code Display */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 80,
            }}
          >
            {[0, 1, 2, 3].map((index) => (
              <View
                key={index}
                style={{
                  width: 60,
                  height: 60,
                  borderBottomColor: "#181725",
                  borderBottomWidth: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: "600",
                    color: "#181725",
                    letterSpacing: 12,
                  }}
                >
                  {code[index] || "-"}
                </Text>
              </View>
            ))}
          </View>

          {/* Resend Code */}
          <TouchableOpacity onPress={handleResendCode}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#53B175",
              }}
            >
              Resend Code
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Numeric Keypad */}
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 12,
            backgroundColor: "#F7F7F7",
          }}
        >
          {KEYPAD_KEYS.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => handleKeyPress(key)}
                  style={{
                    flex: 1,
                    marginHorizontal: 4,
                    paddingVertical: 16,
                    backgroundColor: "#fff",
                    borderColor: "#E8E8E8",
                    borderWidth: 1,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "#181725",
                    }}
                  >
                    {key}
                  </Text>
                  {key === "2" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      ABC
                    </Text>
                  )}
                  {key === "3" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      DEF
                    </Text>
                  )}
                  {key === "4" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      GHI
                    </Text>
                  )}
                  {key === "5" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      JKL
                    </Text>
                  )}
                  {key === "6" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      MNO
                    </Text>
                  )}
                  {key === "7" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      PQRS
                    </Text>
                  )}
                  {key === "8" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      TUV
                    </Text>
                  )}
                  {key === "9" && (
                    <Text
                      style={{ fontSize: 11, color: "#AAAAAA", marginTop: 4 }}
                    >
                      WXYZ
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Continue Button - Below Keypad */}
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 16,
            alignItems: "flex-end",
            backgroundColor: "#F7F7F7",
          }}
        >
          <TouchableOpacity
            onPress={handleContinue}
            disabled={code.length < 4}
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: code.length === 4 ? "#53B175" : "#CCCCCC",
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
              shadowColor: "#53B175",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.25,
              shadowRadius: 6,
            }}
          >
            <MaterialIcons name="chevron-right" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
