import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../src/context/AuthContext";

export default function Account() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const insets = useSafeAreaInsets();
  const baseTabHeight = 70; // should match tab bar visual height

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/onboarding");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 24,
          paddingTop: 32,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#181725",
            marginBottom: 20,
          }}
        >
          My Account
        </Text>

        {/* Header: avatar, name, email, edit */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            marginBottom: 22,
          }}
        >
          <View
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              backgroundColor: "#EAF7EF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
            }}
          >
            {/* you can replace this with user's avatar Image if available */}
            <Text style={{ fontSize: 22, fontWeight: "700", color: "#53B175" }}>
              {user?.name ? user.name.split(" ")[0][0] : "E"}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}
              >
                {user?.name || "Enya Elvis"}
              </Text>
              <TouchableOpacity
                onPress={() => router.push({ pathname: "/(tabs)/account" })}
                style={{ marginLeft: 8 }}
              >
                <MaterialCommunityIcons
                  name="pencil"
                  size={18}
                  color="#53B175"
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, color: "#9B9B9B", marginTop: 4 }}>
              {user?.email || "enyaelvis@gmail.com"}
            </Text>
          </View>
        </View>

        {/* Menu Items */}
        {[
          { label: "Orders", icon: "shopping-outline", to: "/(tabs)/orders" },
          {
            label: "My Details",
            icon: "card-account-details",
            to: "/(tabs)/details",
          },
          {
            label: "Delivery Address",
            icon: "map-marker-outline",
            to: "/(tabs)/addresses",
          },
          {
            label: "Payment Methods",
            icon: "credit-card",
            to: "/(tabs)/payment",
          },
          { label: "Promo Cord", icon: "ticket-percent", to: "/(tabs)/promo" },
          {
            label: "Notifications",
            icon: "bell-outline",
            to: "/(tabs)/notifications",
          },
          { label: "Help", icon: "help-circle-outline", to: "/(tabs)/help" },
          { label: "About", icon: "information-outline", to: "/(tabs)/about" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => item.to && router.push({ pathname: item.to as any })}
            style={{
              paddingVertical: 18,
              borderBottomColor: "#EAEAEA",
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 36, alignItems: "center" }}>
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={22}
                  color="#181725"
                />
              </View>
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 16,
                  color: "#181725",
                  fontWeight: "600",
                }}
              >
                {item.label}
              </Text>
            </View>
            <MaterialCommunityIcons
              name={"chevron-right" as any}
              size={22}
              color="#BDBDBD"
            />
          </TouchableOpacity>
        ))}

        {/* Log Out button - scrollable, part of menu items */}
        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.85}
          style={{
            backgroundColor: "#F2F7F3",
            paddingVertical: 16,
            borderRadius: 28,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 24,
            marginBottom: Math.min(insets.bottom + baseTabHeight + 40, 120),
          }}
        >
          <MaterialCommunityIcons
            name="logout"
            size={20}
            color="#53B175"
            style={{ marginRight: 12 }}
          />
          <Text style={{ color: "#53B175", fontSize: 18, fontWeight: "600" }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
