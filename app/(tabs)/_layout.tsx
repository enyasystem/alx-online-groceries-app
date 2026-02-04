import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#f5f5f5",
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarLabelPosition: "below-icon",
        headerShown: false,
      }}
      screenListeners={{
        tabPress: (e) => {
          // Allow normal navigation
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Shop",
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "700",
            marginTop: 2,
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="tune" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "700",
            marginTop: 2,
          },
        }}
      />

      {/* Center Add Button */}
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                bottom: 12,
                width: 68,
                height: 68,
                borderRadius: 34,
                backgroundColor: "#2D7A5C",
                borderWidth: 3,
                borderColor: "#B8E6C9",
                justifyContent: "center",
                alignItems: "center",
                // shadowColor: "#498a7a",
                // shadowOffset: { width: 0, height: 10 },
                // shadowOpacity: 0.35,
                // shadowRadius: 14,
                elevation: 18,
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: "#53B175",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.25,
                  shadowRadius: 6,
                  elevation: 8,
                }}
              >
                <MaterialIcons name="add" size={30} color="#fff" />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorite",
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "700",
            marginTop: 2,
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "700",
            marginTop: 2,
          },
        }}
      />
    </Tabs>
  );
}
