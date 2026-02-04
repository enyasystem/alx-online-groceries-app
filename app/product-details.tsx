import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import FavoriteBadge from "../src/components/FavoriteBadge";
import { useCart } from "../src/context/CartContext";
import { useFavorites } from "../src/context/FavoritesContext";

export default function ProductDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { addItem } = useCart();
  const { addFavorite, removeFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const getParam = (value: string | string[] | undefined): string => {
    if (Array.isArray(value)) return value[0];
    return value ?? "";
  };

  // Product data from route parameters
  const product = {
    id: parseInt(getParam(params.id)) || 1,
    name: getParam(params.name) || "Organic Bananas",
    price: parseInt(getParam(params.price)) || 2199,
    originalPrice:
      parseInt(getParam(params.originalPrice)) || getParam(params.price)
        ? Math.round(parseInt(getParam(params.price)) * 1.4)
        : 3050,
    rating: parseFloat(getParam(params.rating)) || 4.5,
    reviews: parseInt(getParam(params.reviews)) || 128,
    weight: getParam(params.weight) || "7pcs, Priceg",
    icon: getParam(params.icon) || "🍌",
    description:
      getParam(params.details) ||
      "Fresh, organic product sourced directly from local farms. Hand-picked to ensure the best quality.",
    inStock: true,
    quantity: 50,
  };

  const categoryParam = getParam(params.category);
  const productKey = categoryParam
    ? `${categoryParam}-${product.id}`
    : `${product.id}`;

  const relatedProducts = [
    { id: 2, name: "Red Apple", price: 4999, icon: "🍎" },
    { id: 3, name: "Carrot", price: 1750, icon: "🥕" },
    { id: 4, name: "Mango", price: 2650, icon: "🥭" },
  ];

  const handleAddToCart = () => {
    const parsedId = parseInt(getParam(params.id));
    const categoryParam = getParam(params.category);
    const itemId = categoryParam
      ? `${categoryParam}-${parsedId || Date.now()}`
      : isNaN(parsedId)
        ? Date.now()
        : parsedId;

    addItem({
      id: itemId,
      name: getParam(params.name) || product.name,
      description: getParam(params.weight) || product.weight,
      price: product.price,
      icon: getParam(params.icon) || product.icon,
      quantity,
    });
    router.push("/(tabs)/cart");
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    if (quantity < product.quantity) {
      const newQty = quantity + 1;
      setQuantity(newQty);

      // Add a single unit to cart when plus is pressed on details page
      const parsedId = parseInt(getParam(params.id));
      const categoryParam = getParam(params.category);
      const itemId = categoryParam
        ? `${categoryParam}-${parsedId || Date.now()}`
        : isNaN(parsedId)
          ? Date.now()
          : parsedId;

      addItem({
        id: itemId,
        name: getParam(params.name) || product.name,
        description: getParam(params.weight) || product.weight,
        price: product.price,
        icon: getParam(params.icon) || product.icon,
        quantity: 1,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 16,
            borderBottomColor: "#f5f5f5",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={28} color="#181725" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
            Product Details
          </Text>
          <TouchableOpacity
            onPress={() => {
              const newFavoriteState = !isFavorite;
              setIsFavorite(newFavoriteState);
              if (newFavoriteState) {
                addFavorite({
                  id: productKey,
                  name: product.name,
                  description: product.weight,
                  price: product.price,
                  image: product.icon,
                });
              } else {
                removeFavorite(productKey);
              }
            }}
          >
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-outline"}
              size={28}
              color={isFavorite ? "#53B175" : "#BDBDBD"}
            />
          </TouchableOpacity>
        </View>

        {/* Product Image Section */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 24,
            alignItems: "center",
          }}
        >
          <View
            style={{ width: "100%", position: "relative", marginBottom: 16 }}
          >
            <View
              style={{
                width: "100%",
                height: 250,
                backgroundColor: "#F2F3F2",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 100 }}>{product.icon}</Text>
            </View>

            <View style={{ position: "absolute", top: 12, right: 12 }}>
              <FavoriteBadge
                productKey={productKey}
                productName={product.name}
                productDescription={product.weight}
                productPrice={product.price}
                productImage={product.icon}
              />
            </View>
          </View>

          {/* Product Info */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "#181725",
                marginBottom: 8,
              }}
            >
              {product.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#7C7C7C", marginBottom: 12 }}>
              {product.weight}
            </Text>

            {/* Rating */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <MaterialIcons name="star" size={16} color="#FFB800" />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#181725",
                    marginLeft: 4,
                  }}
                >
                  {product.rating}
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "#7C7C7C" }}>
                ({product.reviews} reviews)
              </Text>
            </View>

            {/* Price Section */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "700",
                  color: "#53B175",
                  marginRight: 12,
                }}
              >
                ₦{product.price.toLocaleString()}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#BDBDBD",
                  textDecorationLine: "line-through",
                }}
              >
                ₦{Math.round(product.originalPrice).toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#181725",
              marginBottom: 8,
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 13, color: "#7C7C7C", lineHeight: 20 }}>
            {product.description}
          </Text>
        </View>

        {/* Stock Status */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 12,
            backgroundColor: "#F2F3F2",
            marginHorizontal: 20,
            borderRadius: 12,
            marginBottom: 24,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="check-circle"
            size={20}
            color="#53B175"
            style={{ marginRight: 8 }}
          />
          <Text style={{ fontSize: 13, color: "#53B175", fontWeight: "600" }}>
            {product.quantity} in stock
          </Text>
        </View>

        {/* Related Products */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: "#181725",
              }}
            >
              Related Products
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 13, color: "#53B175", fontWeight: "600" }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {relatedProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: "#F2F3F2",
                  borderRadius: 12,
                  padding: 12,
                  marginRight: 12,
                  width: 120,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40, marginBottom: 8 }}>
                  {item.icon}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#181725",
                    textAlign: "center",
                    marginBottom: 8,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: "#53B175",
                  }}
                >
                  ₦{item.price.toLocaleString()}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: 24,
          borderTopColor: "#f5f5f5",
          borderTopWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Quantity Selector */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F2F3F2",
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}
        >
          <TouchableOpacity
            onPress={decrementQuantity}
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="remove" size={20} color="#53B175" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#181725",
              marginHorizontal: 12,
              minWidth: 20,
              textAlign: "center",
            }}
          >
            {quantity}
          </Text>
          <TouchableOpacity
            onPress={incrementQuantity}
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="add" size={20} color="#53B175" />
          </TouchableOpacity>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          onPress={handleAddToCart}
          style={{
            flex: 1,
            marginLeft: 12,
            paddingVertical: 14,
            backgroundColor: "#53B175",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
