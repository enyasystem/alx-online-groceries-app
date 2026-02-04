import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  const categories = [
    { id: 1, name: "Vegetables", icon: "🥬", color: "#E8F5E9" },
    { id: 2, name: "Fruits", icon: "🍎", color: "#FCE4EC" },
    { id: 3, name: "Meat", icon: "🥩", color: "#FFF3E0" },
    { id: 4, name: "Dairy", icon: "🧈", color: "#F3E5F5" },
  ];

  const exclusiveOffers = [
    {
      id: 1,
      name: "Organic Bananas",
      details: "7pcs, Priceg",
      price: "$4.99",
      icon: "🍌",
      bgColor: "#FEF5E7",
    },
    {
      id: 2,
      name: "Red Apple",
      details: "1kg, Priceg",
      price: "$4.99",
      icon: "🍎",
      bgColor: "#FADBD8",
    },
    {
      id: 3,
      name: "Carrot",
      details: "1kg, Priceg",
      price: "$3.99",
      icon: "🥕",
      bgColor: "#FDC79B",
    },
    {
      id: 4,
      name: "Bell Pepper",
      details: "1kg, Priceg",
      price: "$2.99",
      icon: "🫑",
      bgColor: "#FADBD8",
    },
  ];

  const bestSelling = [
    { id: 1, name: "Tomato", weight: "1kg", price: "$4.99", icon: "🍅" },
    { id: 2, name: "Onion", weight: "1kg", price: "$3.99", icon: "🧅" },
    { id: 3, name: "Lettuce", weight: "500g", price: "$2.99", icon: "🥬" },
    { id: 4, name: "Spinach", weight: "500g", price: "$2.49", icon: "🥬" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header with Location and Search */}
        <View
          style={{ paddingHorizontal: 20, paddingTop: 32, paddingBottom: 16 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="map-marker"
                size={20}
                color="#53B175"
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#181725",
                  marginLeft: 6,
                }}
              >
                Dhaka, Banassre
              </Text>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="#181725"
              />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <TouchableOpacity
            style={{
              backgroundColor: "#F2F3F2",
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="magnify" size={20} color="#BDBDBD" />
            <Text style={{ marginLeft: 12, color: "#BDBDBD", fontSize: 14 }}>
              Search Store
            </Text>
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
          <View
            style={{
              backgroundColor: "#53B175",
              borderRadius: 16,
              overflow: "hidden",
              minHeight: 140,
              justifyContent: "space-between",
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: 6,
                }}
              >
                Fresh Vegetables
              </Text>
              <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.9)" }}>
                Get Up To 40% OFF
              </Text>
            </View>
            <Text style={{ fontSize: 80 }}>🥕</Text>
          </View>
        </View>

        {/* Quick Categories */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
              Categories
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 14, color: "#53B175", fontWeight: "600" }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -20, paddingHorizontal: 20 }}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={{
                  backgroundColor: cat.color,
                  borderRadius: 12,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginRight: 12,
                  minWidth: 90,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 32, marginBottom: 6 }}>
                  {cat.icon}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#181725",
                    textAlign: "center",
                  }}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Exclusive Offers Section */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
              Exclusive Offer
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 14, color: "#53B175", fontWeight: "600" }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {exclusiveOffers.slice(0, 2).map((offer) => (
              <TouchableOpacity
                key={offer.id}
                onPress={() =>
                  router.push({
                    pathname: "/product-details",
                    params: {
                      id: offer.id,
                      name: offer.name,
                      price: offer.price,
                      icon: offer.icon,
                      details: offer.details,
                    },
                  })
                }
                style={{
                  backgroundColor: offer.bgColor,
                  borderRadius: 16,
                  padding: 16,
                  width: "48%",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 48, marginBottom: 8 }}>
                  {offer.icon}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#181725",
                    marginBottom: 4,
                  }}
                >
                  {offer.name}
                </Text>
                <Text
                  style={{ fontSize: 12, color: "#7C7C7C", marginBottom: 8 }}
                >
                  {offer.details}
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "700", color: "#53B175" }}
                >
                  {offer.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Best Selling Section */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
              Best Selling
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 14, color: "#53B175", fontWeight: "600" }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {bestSelling.slice(0, 2).map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  router.push({
                    pathname: "/product-details",
                    params: {
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      weight: item.weight,
                      icon: item.icon,
                    },
                  })
                }
                style={{
                  backgroundColor: "#F7F7F7",
                  borderRadius: 12,
                  padding: 12,
                  marginBottom: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E8F5E9",
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <Text style={{ fontSize: 32 }}>{item.icon}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#181725",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{ fontSize: 12, color: "#7C7C7C", marginTop: 2 }}
                    >
                      {item.weight}
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#53B175",
                      marginBottom: 6,
                    }}
                  >
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: "/product-details",
                        params: {
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          weight: item.weight,
                          icon: item.icon,
                        },
                      })
                    }
                    style={{
                      backgroundColor: "#53B175",
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 16, color: "#fff" }}>+</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Groceries Section */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
              Groceries
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 14, color: "#53B175", fontWeight: "600" }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF3E0",
                borderRadius: 12,
                padding: 16,
                width: "48%",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 120,
              }}
            >
              <Text style={{ fontSize: 32, marginBottom: 6 }}>🍲</Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", color: "#181725" }}
              >
                Pulses
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#E0F2F1",
                borderRadius: 12,
                padding: 16,
                width: "48%",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 120,
              }}
            >
              <Text style={{ fontSize: 32, marginBottom: 6 }}>🍚</Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", color: "#181725" }}
              >
                Rice
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {[
              { name: "Beef Bone", icon: "🥩", color: "#FADBD8" },
              { name: "Broiler Chicken", icon: "🍗", color: "#E8F5E9" },
            ].map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={{
                  backgroundColor: item.color,
                  borderRadius: 12,
                  padding: 16,
                  width: "48%",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <Text style={{ fontSize: 32, marginBottom: 6 }}>
                  {item.icon}
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#181725" }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
