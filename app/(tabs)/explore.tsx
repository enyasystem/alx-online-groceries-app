import { MaterialCommunityIcons } from "@expo/vector-icons";
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

export default function Explore() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: 1,
      name: "Fresh Fruits & Vegetable",
      icon: "🥬",
      color: "#DCF5E3",
      borderColor: "#53B175",
      featured: true,
      productCount: 256,
    },
    {
      id: 2,
      name: "Cooking Oil & Ghee",
      icon: "🫒",
      color: "#FFF2E8",
      borderColor: "#FFA852",
      featured: true,
      productCount: 89,
    },
    {
      id: 3,
      name: "Meat & Fish",
      icon: "🥩",
      color: "#FFEBEE",
      borderColor: "#EB5757",
      featured: true,
      productCount: 142,
    },
    {
      id: 4,
      name: "Bakery & Snacks",
      icon: "🍞",
      color: "#F3E5F5",
      borderColor: "#B77DFF",
      productCount: 178,
    },
    {
      id: 5,
      name: "Dairy & Eggs",
      icon: "🥛",
      color: "#FFFBEA",
      borderColor: "#FFD54F",
      productCount: 201,
    },
    {
      id: 6,
      name: "Beverages",
      icon: "🥤",
      color: "#E3F2FD",
      borderColor: "#42A5F5",
      productCount: 167,
    },
  ];

  const featuredCategories = categories.filter((cat) => cat.featured);

  const handleCategoryPress = (category: (typeof categories)[0]) => {
    router.push({
      pathname: "/category-products",
      params: { category: category.name },
    });
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          paddingHorizontal: 20,
          paddingVertical: 24,
          paddingTop: 32,
        }}
      >
        {/* Header */}
        <View
          style={{ paddingHorizontal: 20, paddingTop: 32, paddingBottom: 16 }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: "#181725",
              marginBottom: 8,
            }}
          >
            Find Products
          </Text>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F2F3F2",
              borderRadius: 16,
              paddingHorizontal: 12,
              height: 48,
              borderWidth: 1,
              borderColor: "#E8E8E8",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color="#7C7C7C"
              style={{ marginRight: 8 }}
            />
            <TextInput
              placeholder="Search Store"
              placeholderTextColor="#BDBDBD"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{
                flex: 1,
                fontSize: 14,
                color: "#181725",
                fontWeight: "500",
              }}
            />
            {searchQuery && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <MaterialCommunityIcons
                  name="close-circle"
                  size={18}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Categories Grid */}
        <View style={{ paddingHorizontal: 20 }}>
          {/* Featured Carousel */}
          {featuredCategories.length > 0 && (
            <View style={{ marginBottom: 28 }}>
              {/* Carousel Header */}
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#181725",
                  marginBottom: 12,
                }}
              >
                Trending Now
              </Text>

              {/* Horizontal Carousel */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
              >
                {featuredCategories.map((category, index) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategoryPress(category)}
                    activeOpacity={0.8}
                    style={{
                      width: 280,
                      marginRight:
                        index < featuredCategories.length - 1 ? 12 : 0,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: category.color,
                        borderRadius: 24,
                        padding: 24,
                        borderWidth: 1,
                        borderColor: category.borderColor,
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: 220,
                        shadowColor: category.borderColor,
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.2,
                        shadowRadius: 12,
                        elevation: 8,
                      }}
                    >
                      {/* Featured Badge */}
                      <View
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          backgroundColor: category.borderColor,
                          paddingHorizontal: 10,
                          paddingVertical: 4,
                          borderRadius: 12,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: "700",
                            color: "#fff",
                            letterSpacing: 0.5,
                          }}
                        >
                          TRENDING
                        </Text>
                      </View>

                      {/* Icon */}
                      <Text style={{ fontSize: 72, marginBottom: 12 }}>
                        {category.icon}
                      </Text>

                      {/* Category Name */}
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "#181725",
                          textAlign: "center",
                          marginBottom: 6,
                          lineHeight: 22,
                        }}
                      >
                        {category.name}
                      </Text>

                      {/* Product Count */}
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#7C7C7C",
                          fontWeight: "500",
                          marginBottom: 8,
                        }}
                      >
                        {category.productCount} Products
                      </Text>

                      {/* Arrow Indicator */}
                      <View
                        style={{
                          backgroundColor: category.borderColor,
                          paddingHorizontal: 8,
                          paddingVertical: 6,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={{ fontSize: 14, color: "#fff" }}>→</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Carousel Indicator Dots */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                  gap: 6,
                }}
              >
                {featuredCategories.map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: index === 0 ? "#53B175" : "#E0E0E0",
                    }}
                  />
                ))}
              </View>
            </View>
          )}

          {/* All Categories Header */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#181725",
              marginBottom: 16,
              marginTop: 12,
            }}
          >
            All Categories
          </Text>

          {/* Regular Categories Grid */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {filteredCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => handleCategoryPress(category)}
                activeOpacity={0.8}
                style={{
                  width: "48%",
                  marginBottom: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: category.color,
                    borderRadius: 20,
                    padding: 20,
                    borderWidth: 1,
                    borderColor: category.borderColor,
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 180,
                    shadowColor: category.borderColor,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.15,
                    shadowRadius: 8,
                    elevation: 5,
                  }}
                >
                  {/* Icon */}
                  <Text style={{ fontSize: 56, marginBottom: 10 }}>
                    {category.icon}
                  </Text>

                  {/* Category Name */}
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "700",
                      color: "#181725",
                      textAlign: "center",
                      lineHeight: 18,
                      marginBottom: 6,
                    }}
                  >
                    {category.name}
                  </Text>

                  {/* Product Count */}
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#7C7C7C",
                      fontWeight: "500",
                    }}
                  >
                    {category.productCount} items
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
