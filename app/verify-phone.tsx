import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const COUNTRIES = [
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
];

const KEYPAD_KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["+", "0", "⌫"],
];

export default function EnterPhoneNumber() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === "⌫") {
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else {
      setPhoneNumber(phoneNumber + key);
    }
  };

  const handleContinue = () => {
    if (phoneNumber.trim().length >= 10) {
      router.push("/(tabs)/index");
    }
  };

  const handleSelectCountry = (country: (typeof COUNTRIES)[0]) => {
    setSelectedCountry(country);
    setShowCountryModal(false);
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
            Enter your{"\n"}mobile number
          </Text>

          {/* Label */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 8,
              fontWeight: "500",
              letterSpacing: 0.5,
            }}
          >
            Mobile Number
          </Text>

          {/* Phone Number Input */}
          <View
            style={{
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 2,
              marginBottom: 80,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
              }}
            >
              {/* Country Selector */}
              <TouchableOpacity
                onPress={() => setShowCountryModal(true)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <Text style={{ fontSize: 24, marginRight: 8 }}>
                  {selectedCountry.flag}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#181725",
                    marginRight: 4,
                  }}
                >
                  {selectedCountry.code}
                </Text>
              </TouchableOpacity>

              {/* Phone Input */}
              <TextInput
                placeholder="0912345678"
                placeholderTextColor="#CCCCCC"
                keyboardType="none"
                value={phoneNumber}
                editable={false}
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: "#181725",
                  paddingVertical: 8,
                }}
              />
            </View>
          </View>
        </ScrollView>

        {/* Numeric Keypad */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingBottom: 24,
            paddingTop: 16,
          }}
        >
          {KEYPAD_KEYS.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => handleKeyPress(key)}
                  style={{
                    flex: 1,
                    marginHorizontal: 6,
                    paddingVertical: 18,
                    backgroundColor: "#fff",
                    borderColor: "#E2E2E2",
                    borderWidth: 1,
                    borderRadius: 14,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: "#181725",
                    }}
                  >
                    {key}
                  </Text>
                  {key === "2" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      ABC
                    </Text>
                  )}
                  {key === "3" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      DEF
                    </Text>
                  )}
                  {key === "4" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      GHI
                    </Text>
                  )}
                  {key === "5" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      JKL
                    </Text>
                  )}
                  {key === "6" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      MNO
                    </Text>
                  )}
                  {key === "7" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      PQRS
                    </Text>
                  )}
                  {key === "8" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      TUV
                    </Text>
                  )}
                  {key === "9" && (
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                      WXYZ
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Continue Button */}
        <View
          style={{
            position: "absolute",
            bottom: 100,
            right: 16,
          }}
        >
          <TouchableOpacity
            onPress={handleContinue}
            disabled={phoneNumber.trim().length < 10}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              backgroundColor: "#53B175",
              alignItems: "center",
              justifyContent: "center",
              elevation: 6,
              shadowColor: "#53B175",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
            }}
          >
            <MaterialIcons
              name="chevron-right"
              size={32}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Loading Bar */}
        <View
          style={{
            height: 3,
            backgroundColor: "#E2E2E2",
            marginHorizontal: 40,
            marginBottom: 20,
            borderRadius: 2,
          }}
        />
      </View>

      {/* Country Picker Modal */}
      <Modal
        visible={showCountryModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCountryModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              maxHeight: "80%",
            }}
          >
            {/* Header */}
            <View
              style={{
                padding: 20,
                borderBottomColor: "#E2E2E2",
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#181725",
                }}
              >
                Select Country
              </Text>
              <TouchableOpacity onPress={() => setShowCountryModal(false)}>
                <MaterialIcons name="close" size={24} color="#181725" />
              </TouchableOpacity>
            </View>

            {/* Country List */}
            <FlatList
              data={COUNTRIES}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectCountry(item)}
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                    borderBottomColor: "#F0F0F0",
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor:
                      selectedCountry.code === item.code ? "#F0F0F0" : "#fff",
                  }}
                >
                  <Text style={{ fontSize: 20, marginRight: 12 }}>
                    {item.flag}
                  </Text>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: "#181725",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#7C7C7C",
                      marginRight: 8,
                    }}
                  >
                    {item.code}
                  </Text>
                  {selectedCountry.code === item.code && (
                    <MaterialIcons
                      name="check-circle"
                      size={24}
                      color="#53B175"
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
