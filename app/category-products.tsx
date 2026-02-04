import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import FavoriteBadge from "../src/components/FavoriteBadge";

export default function CategoryProducts() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const categoryName = params.category as string;

  // Product data with Naira pricing
  const products: Record<
    string,
    {
      id: number;
      name: string;
      size: string;
      price: number;
      originalPrice?: number;
      image: string;
      rating?: number;
    }[]
  > = {
    Beverages: [
      {
        id: 1,
        name: "Diet Coke",
        size: "355ml, Price",
        price: 850,
        image: "🥤",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Sprite Can",
        size: "325ml, Price",
        price: 650,
        image: "🥤",
        rating: 4.3,
      },
      {
        id: 3,
        name: "Apple & Grape Juice",
        size: "2L, Price",
        price: 6999,
        image: "🧃",
        rating: 4.8,
      },
      {
        id: 4,
        name: "Orange Juice",
        size: "2L, Price",
        price: 6999,
        image: "🧃",
        rating: 4.7,
      },
      {
        id: 5,
        name: "Coca Cola Can",
        size: "325ml, Price",
        price: 2199,
        image: "🥤",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Pepsi Can",
        size: "330ml, Price",
        price: 2199,
        image: "🥤",
        rating: 4.4,
      },
    ],
    "Fresh Fruits & Vegetable": [
      {
        id: 1,
        name: "Organic Banana",
        size: "7pcs, Priceg",
        price: 2199,
        originalPrice: 3050,
        image: "🍌",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Red Apple",
        size: "1kg",
        price: 4999,
        image: "🍎",
        rating: 4.8,
      },
      {
        id: 3,
        name: "Carrot",
        size: "500g",
        price: 1750,
        image: "🥕",
        rating: 4.3,
      },
      {
        id: 4,
        name: "Mango",
        size: "4pcs",
        price: 2650,
        image: "🥭",
        rating: 4.6,
      },
      {
        id: 5,
        name: "Orange",
        size: "1kg",
        price: 3200,
        image: "🍊",
        rating: 4.4,
      },
      {
        id: 6,
        name: "Broccoli",
        size: "500g",
        price: 2850,
        image: "🥦",
        rating: 4.7,
      },
    ],
    "Cooking Oil & Ghee": [
      {
        id: 1,
        name: "Extra Virgin Olive Oil",
        size: "500ml",
        price: 8999,
        image: "🫒",
        rating: 4.8,
      },
      {
        id: 2,
        name: "Palm Oil",
        size: "1L",
        price: 3500,
        image: "🫒",
        rating: 4.5,
      },
      {
        id: 3,
        name: "Butter Ghee",
        size: "400g",
        price: 4999,
        image: "🫒",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Vegetable Oil",
        size: "2L",
        price: 5500,
        image: "🫒",
        rating: 4.6,
      },
      {
        id: 5,
        name: "Coconut Oil",
        size: "500ml",
        price: 4200,
        image: "🫒",
        rating: 4.9,
      },
      {
        id: 6,
        name: "Sunflower Oil",
        size: "1L",
        price: 3999,
        image: "🫒",
        rating: 4.4,
      },
    ],
    "Meat & Fish": [
      {
        id: 1,
        name: "Fresh Chicken",
        size: "1kg",
        price: 5999,
        image: "🍗",
        rating: 4.6,
      },
      {
        id: 2,
        name: "Beef Steak",
        size: "500g",
        price: 7999,
        image: "🥩",
        rating: 4.8,
      },
      {
        id: 3,
        name: "Fresh Fish",
        size: "1kg",
        price: 6500,
        image: "🐟",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Turkey Meat",
        size: "1kg",
        price: 8999,
        image: "🍗",
        rating: 4.5,
      },
      {
        id: 5,
        name: "Salmon Fillet",
        size: "500g",
        price: 12999,
        image: "🐟",
        rating: 4.9,
      },
      {
        id: 6,
        name: "Ground Beef",
        size: "500g",
        price: 4999,
        image: "🥩",
        rating: 4.4,
      },
    ],
    "Bakery & Snacks": [
      {
        id: 1,
        name: "Whole Wheat Bread",
        size: "500g",
        price: 1999,
        image: "🍞",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Croissant",
        size: "100g",
        price: 850,
        image: "🥐",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Chocolate Cake",
        size: "1 slice",
        price: 2500,
        image: "🍰",
        rating: 4.8,
      },
      {
        id: 4,
        name: "Cookies Pack",
        size: "200g",
        price: 1500,
        image: "🍪",
        rating: 4.6,
      },
      {
        id: 5,
        name: "Donut",
        size: "50g",
        price: 650,
        image: "🍩",
        rating: 4.4,
      },
      {
        id: 6,
        name: "Muffin",
        size: "100g",
        price: 1200,
        image: "🧁",
        rating: 4.9,
      },
    ],
    "Dairy & Eggs": [
      {
        id: 1,
        name: "Fresh Milk",
        size: "1L",
        price: 1500,
        image: "🥛",
        rating: 4.6,
      },
      {
        id: 2,
        name: "Eggs Pack",
        size: "12pcs",
        price: 2200,
        image: "🥚",
        rating: 4.8,
      },
      {
        id: 3,
        name: "Yogurt",
        size: "500g",
        price: 2000,
        image: "🥛",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Butter",
        size: "200g",
        price: 2500,
        image: "🧈",
        rating: 4.5,
      },
      {
        id: 5,
        name: "Cheese",
        size: "250g",
        price: 3500,
        image: "🧀",
        rating: 4.9,
      },
      {
        id: 6,
        name: "Cream",
        size: "200ml",
        price: 1800,
        image: "🥛",
        rating: 4.4,
      },
    ],
  };

  const categoryProducts = products[categoryName] || [];

  const handleProductPress = (product: (typeof categoryProducts)[0]) => {
    router.push({
      pathname: "/product-details",
      params: {
        id: product.id,
        name: product.name,
        price: product.price,
        weight: product.size,
        icon: product.image,
        details: `${product.name} - ${product.size}`,
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F3F2",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#181725",
            flex: 1,
            textAlign: "center",
            marginLeft: -24,
          }}
        >
          {categoryName}
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="tune" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Product Count */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#7C7C7C",
              fontWeight: "500",
            }}
          >
            {categoryProducts.length} products available
          </Text>
        </View>

        {/* Products Grid */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {categoryProducts.map((product) => (
              <View
                key={product.id}
                style={{
                  width: "48%",
                  marginBottom: 16,
                  position: "relative",
                }}
              >
                <TouchableOpacity
                  onPress={() => handleProductPress(product)}
                  activeOpacity={0.8}
                >
                  {/* Product Card */}
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: "#E8E8E8",
                      overflow: "hidden",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.05,
                      shadowRadius: 4,
                      elevation: 2,
                    }}
                  >
                    {/* Product Image Container */}
                    <View
                      style={{
                        backgroundColor: "#F2F3F2",
                        height: 140,
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomWidth: 1,
                        borderBottomColor: "#E8E8E8",
                      }}
                    >
                      <Text style={{ fontSize: 56 }}>{product.image}</Text>
                    </View>

                    {/* Product Info */}
                    <View style={{ padding: 12 }}>
                      {/* Product Name */}
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "700",
                          color: "#181725",
                          marginBottom: 4,
                          lineHeight: 18,
                        }}
                        numberOfLines={2}
                      >
                        {product.name}
                      </Text>

                      {/* Size/Description */}
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#7C7C7C",
                          fontWeight: "500",
                          marginBottom: 8,
                        }}
                      >
                        {product.size}
                      </Text>

                      {/* Price and Add Button */}
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Price Section */}
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: "700",
                              color: "#53B175",
                            }}
                          >
                            ₦{product.price.toLocaleString()}
                          </Text>
                          {product.originalPrice && (
                            <Text
                              style={{
                                fontSize: 11,
                                color: "#BDBDBD",
                                textDecorationLine: "line-through",
                                marginTop: 2,
                              }}
                            >
                              ₦{product.originalPrice.toLocaleString()}
                            </Text>
                          )}
                        </View>

                        {/* Add Button */}
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#53B175",
                            width: 32,
                            height: 32,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 18,
                              color: "#fff",
                              fontWeight: "600",
                            }}
                          >
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Favorite badge positioned on card */}
                <View
                  style={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
                  pointerEvents="box-none"
                >
                  <FavoriteBadge
                    productId={product.id}
                    productName={product.name}
                    productDescription={product.size}
                    productPrice={product.price}
                    productImage={product.image}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
