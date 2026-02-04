import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCart } from "../../src/context/CartContext";
import { useFavorites } from "../../src/context/FavoritesContext";

export default function Favorites() {
  const router = useRouter();
  const { favorites, removeFavorite } = useFavorites();
  const { addItem } = useCart();

  const handleAddAllToCart = () => {
    favorites.forEach((item) => {
      addItem({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        icon: item.image,
        quantity: 1,
      });
    });
    router.push("/(tabs)/cart");
  };

  const handleAddToCart = (item: (typeof favorites)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      icon: item.image,
      quantity: 1,
    });
    router.push("/(tabs)/cart");
  };

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 24,
            paddingTop: 32,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#181725",
              marginBottom: 16,
            }}
          >
            My Favorites
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              minHeight: 300,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#7C7C7C",
                marginBottom: 8,
              }}
            >
              ♡ No favorites yet
            </Text>
            <Text
              style={{ fontSize: 14, color: "#7C7C7C", textAlign: "center" }}
            >
              Save your favorite items for quick access later
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 24,
          paddingTop: 32,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#181725",
            marginBottom: 24,
          }}
        >
          Favourites
        </Text>

        {/* Favorites List */}
        <View style={{ gap: 0 }}>
          {favorites.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 16,
                  justifyContent: "space-between",
                }}
                onPress={() => handleAddToCart(item)}
              >
                {/* Image */}
                <Text style={{ fontSize: 48, marginRight: 12 }}>
                  {item.image}
                </Text>

                {/* Product Info */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#181725",
                      marginBottom: 4,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#7C7C7C" }}>
                    {item.description}
                  </Text>
                </View>

                {/* Price and Arrow */}
                <View
                  style={{
                    alignItems: "flex-end",
                    marginLeft: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#181725",
                      marginBottom: 8,
                    }}
                  >
                    ₦{item.price.toLocaleString()}
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </TouchableOpacity>

              {/* Divider */}
              {index < favorites.length - 1 && (
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#F0F0F0",
                  }}
                />
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Add All To Cart Button */}
      <View style={{ padding: 20, paddingBottom: 90 }}>
        <TouchableOpacity
          onPress={handleAddAllToCart}
          style={{
            backgroundColor: "#53B175",
            paddingVertical: 16,
            borderRadius: 16,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Add All To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
