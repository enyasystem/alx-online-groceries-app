import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
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

export default function SignIn() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    router.push("/verify-phone");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in
    router.push("/verify-phone");
  };

  const handleSelectCountry = (country: (typeof COUNTRIES)[0]) => {
    setSelectedCountry(country);
    setShowCountryModal(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingVertical: 24, paddingBottom: 80 }}
      >
        {/* Hero Image */}
        <View
          style={{
            width: "100%",
            height: 250,
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 32,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Image
            source={require("../assets/images/onboarding-hero.jpg")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>

        {/* Headline */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "800",
            color: "#181725",
            marginBottom: 32,
            lineHeight: 40,
          }}
        >
          Get your groceries{"\n"}with nectar
        </Text>

        {/* Phone Number Input */}
        <View
          style={{
            marginBottom: 32,
            borderBottomColor: "#E2E2E2",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 12,
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
                  fontWeight: "600",
                  color: "#181725",
                  marginRight: 4,
                }}
              >
                {selectedCountry.code}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="#181725"
              />
            </TouchableOpacity>

            {/* Phone Input - Clickable */}
            <TouchableOpacity
              onPress={() => router.push("/verify-phone")}
              style={{
                flex: 1,
                paddingVertical: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#CCCCCC",
                }}
              >
                Enter phone number
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Or Connect Text */}
        <Text
          style={{
            fontSize: 14,
            color: "#7C7C7C",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Or connect with social media
        </Text>

        {/* Google Button */}
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          style={{
            backgroundColor: "#5B9DF9",
            paddingVertical: 16,
            borderRadius: 28,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 20, marginRight: 12 }}>G</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Facebook Button */}
        <TouchableOpacity
          onPress={handleFacebookSignIn}
          style={{
            backgroundColor: "#2D5AA3",
            paddingVertical: 16,
            borderRadius: 28,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 20, marginRight: 12, color: "#fff" }}>
            f
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View
          style={{
            height: 1,
            backgroundColor: "#E2E2E2",
            marginVertical: 24,
          }}
        />

        {/* Login/Signup Links */}
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 8 }}
        >
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
          <Text style={{ fontSize: 14, color: "#7C7C7C" }}>or</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#53B175",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
                  <Text style={{ fontSize: 24, marginRight: 12 }}>
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
