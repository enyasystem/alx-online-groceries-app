import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../src/context/AuthContext";

const { width: windowWidth } = Dimensions.get("window");
const cardWidth = windowWidth - 40; // 20px padding on each side
const cardMargin = 12;

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<ScrollView>(null);
  const promoRef = useRef<ScrollView>(null);

  const promos = [
    {
      id: 1,
      title: "Fresh Vegetables",
      subtitle: "Get Up To 40% OFF",
      icon: "🥕",
      bgColor: "#53B175",
    },
    {
      id: 2,
      title: "Organic Fruits",
      subtitle: "Get Up To 35% OFF",
      icon: "🍎",
      bgColor: "#E74C3C",
    },
    {
      id: 3,
      title: "Fresh Dairy",
      subtitle: "Get Up To 25% OFF",
      icon: "🧈",
      bgColor: "#F39C12",
    },
  ];
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
      price: "₦2,499",
      icon: "🍌",
      bgColor: "#FEF5E7",
    },
    {
      id: 2,
      name: "Red Apple",
      details: "1kg, Priceg",
      price: "₦2,499",
      icon: "🍎",
      bgColor: "#FADBD8",
    },
    {
      id: 3,
      name: "Carrot",
      details: "1kg, Priceg",
      price: "₦1,999",
      icon: "🥕",
      bgColor: "#FDC79B",
    },
    {
      id: 4,
      name: "Bell Pepper",
      details: "1kg, Priceg",
      price: "₦1,499",
      icon: "🫑",
      bgColor: "#FADBD8",
    },
  ];

  const bestSelling = [
    { id: 1, name: "Tomato", weight: "1kg", price: "₦2,499", icon: "🍅" },
    { id: 2, name: "Onion", weight: "1kg", price: "₦1,999", icon: "🧅" },
    { id: 3, name: "Lettuce", weight: "500g", price: "₦1,499", icon: "🥬" },
    { id: 4, name: "Spinach", weight: "500g", price: "₦1,249", icon: "🥬" },
  ];

  // Auto-scroll for promo carousel
  useEffect(() => {
    if (!isAutoScrolling || !promoRef.current) return;

    const promoInterval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % promos.length;
        promoRef.current?.scrollTo({
          x: nextIndex * (cardWidth + cardMargin),
          animated: true,
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(promoInterval);
  }, [isAutoScrolling, promos.length]);

  // Auto-scroll for offers carousel - Marquee/Ticker effect
  useEffect(() => {
    const cardWithMargin = cardWidth + cardMargin;
    const totalWidth = exclusiveOffers.length * cardWithMargin;
    let scrollPosition = 0;

    const scrollInterval = setInterval(() => {
      scrollPosition += 1; // Pixels per tick (smooth scrolling)

      carouselRef.current?.scrollTo({
        x: scrollPosition,
        animated: false,
      });

      // Update index indicator for dot navigation
      const index =
        Math.floor(scrollPosition / cardWithMargin) % exclusiveOffers.length;
      setCurrentOfferIndex(index);

      // Reset when reaching the duplicate section
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
    }, 16); // 16ms for smooth 60fps

    return () => clearInterval(scrollInterval);
  }, [cardWidth, cardMargin, exclusiveOffers.length]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* App Logo Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          paddingTop: 32,
          alignItems: "center",
          borderBottomColor: "#F0F0F0",
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#53B175" }}>
          🛒 Nectar
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header with Location and Search */}
        <View
          style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 }}
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
                {user?.location || "Select Location"}
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

        {/* Promo Banner - Carousel */}
        <View style={{ marginVertical: 20 }}>
          <ScrollView
            ref={promoRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / (cardWidth + cardMargin),
              );
              setCurrentPromoIndex(index % promos.length);
              setIsAutoScrolling(true);
            }}
            onScrollBeginDrag={() => setIsAutoScrolling(false)}
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {promos.map((promo) => (
              <TouchableOpacity
                key={promo.id}
                style={{
                  backgroundColor: promo.bgColor,
                  borderRadius: 20,
                  overflow: "hidden",
                  minHeight: 160,
                  justifyContent: "space-between",
                  padding: 24,
                  flexDirection: "row",
                  alignItems: "center",
                  width: cardWidth,
                  marginRight: cardMargin,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 12,
                  elevation: 5,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "700",
                      color: "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {promo.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: "500",
                    }}
                  >
                    {promo.subtitle}
                  </Text>
                </View>
                <Text style={{ fontSize: 80, marginLeft: 16 }}>
                  {promo.icon}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Promo Carousel Indicators */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
              paddingHorizontal: 20,
            }}
          >
            {promos.map((_, index) => (
              <View
                key={index}
                style={{
                  width: currentPromoIndex === index ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    currentPromoIndex === index ? "#53B175" : "#E2E2E2",
                  marginHorizontal: 4,
                }}
              />
            ))}
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

        {/* Exclusive Offers Section - Carousel */}
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

          <ScrollView
            ref={carouselRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            scrollsToTop={false}
            nestedScrollEnabled={true}
            scrollEnabled={true}
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {[...exclusiveOffers, ...exclusiveOffers].map((offer, index) => (
              <TouchableOpacity
                key={`${offer.id}-${index}`}
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
                  borderRadius: 20,
                  padding: 20,
                  width: cardWidth,
                  marginRight: cardMargin,
                  justifyContent: "space-between",
                  height: 200,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 12,
                  elevation: 5,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#53B175",
                      backgroundColor: "rgba(83, 177, 117, 0.15)",
                      paddingHorizontal: 12,
                      paddingVertical: 4,
                      borderRadius: 20,
                      alignSelf: "flex-start",
                      marginBottom: 12,
                    }}
                  >
                    Exclusive
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#181725",
                      marginBottom: 4,
                    }}
                  >
                    {offer.name}
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "#7C7C7C", marginBottom: 4 }}
                  >
                    {offer.details}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#53B175",
                    }}
                  >
                    {offer.price}
                  </Text>
                  <Text style={{ fontSize: 60 }}>{offer.icon}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Carousel Indicators */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            {exclusiveOffers.map((_, index) => (
              <View
                key={index}
                style={{
                  width: currentOfferIndex === index ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    currentOfferIndex === index ? "#53B175" : "#E2E2E2",
                  marginHorizontal: 4,
                }}
              />
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
