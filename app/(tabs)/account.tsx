import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Account() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 16 }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#181725",
            marginBottom: 20,
          }}
        >
          My Account
        </Text>

        {/* Profile Section */}
        <View
          style={{
            backgroundColor: "#F7F7F7",
            padding: 16,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#181725",
              marginBottom: 8,
            }}
          >
            👤 Profile
          </Text>
          <Text style={{ fontSize: 14, color: "#7C7C7C" }}>
            Manage your profile and preferences
          </Text>
        </View>

        {/* Menu Items */}
        {[
          { label: "My Orders", icon: "📦" },
          { label: "Delivery Addresses", icon: "📍" },
          { label: "Payment Methods", icon: "💳" },
          { label: "Notifications", icon: "🔔" },
          { label: "Settings", icon: "⚙️" },
          { label: "Help & Support", icon: "❓" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              paddingVertical: 14,
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, marginRight: 12 }}>{item.icon}</Text>
              <Text
                style={{ fontSize: 16, color: "#181725", fontWeight: "500" }}
              >
                {item.label}
              </Text>
            </View>
            <Text style={{ fontSize: 18, color: "#7C7C7C" }}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Sign Out */}
        <TouchableOpacity
          style={{
            backgroundColor: "#F44336",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
