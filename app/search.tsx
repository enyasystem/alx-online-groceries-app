import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import FiltersModal from "../src/components/FiltersModal";
import { useAuth } from "../src/context/AuthContext";

const { width: windowWidth } = Dimensions.get("window");
const cardWidth = (windowWidth - 40) / 2 - 6; // 2 columns with spacing

const allProducts = [
  {
    id: 1,
    name: "Egg Chicken Red",
    details: "4pcs, Price",
    price: "₦999",
    icon: "🥚",
    category: "Eggs",
  },
  {
    id: 2,
    name: "Egg Chicken White",
    details: "180g, Price",
    price: "₦750",
    icon: "🥚",
    category: "Eggs",
  },
  {
    id: 3,
    name: "Egg Pasta",
    details: "300g, Price",
    price: "₦7,999",
    icon: "🍝",
    category: "Pasta",
  },
  {
    id: 4,
    name: "Egg Noodles",
    details: "2L, Price",
    price: "₦7,999",
    icon: "🍜",
    category: "Noodles",
  },
  {
    id: 5,
    name: "Mayonnais Eggless",
    details: "500g, Price",
    price: "₦2,499",
    icon: "🥄",
    category: "Condiments",
  },
  {
    id: 6,
    name: "Egg Noodles Pack",
    details: "400g, Price",
    price: "₦1,999",
    icon: "🍜",
    category: "Noodles",
  },
  {
    id: 7,
    name: "Tomato",
    details: "1kg, Price",
    price: "₦2,499",
    icon: "🍅",
    category: "Vegetables",
  },
  {
    id: 8,
    name: "Onion",
    details: "1kg, Price",
    price: "₦1,999",
    icon: "🧅",
    category: "Vegetables",
  },
  {
    id: 9,
    name: "Lettuce",
    details: "500g, Price",
    price: "₦1,499",
    icon: "🥬",
    category: "Vegetables",
  },
  {
    id: 10,
    name: "Spinach",
    details: "500g, Price",
    price: "₦1,249",
    icon: "🥬",
    category: "Vegetables",
  },
  {
    id: 11,
    name: "Banana",
    details: "1kg, Price",
    price: "₦1,999",
    icon: "🍌",
    category: "Fruits",
  },
  {
    id: 12,
    name: "Apple",
    details: "1kg, Price",
    price: "₦2,499",
    icon: "🍎",
    category: "Fruits",
  },
];

export default function SearchScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[];
    brands: string[];
  }>({ categories: [], brands: [] });

  const applyFilters = (filters: {
    categories: string[];
    brands: string[];
  }) => {
    setActiveFilters(filters);
    let result = allProducts;

    // Filter by search query
    if (searchQuery.trim() !== "") {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category),
      );
    }

    // Filter by brands (would need brand data in products)
    // For now, we'll just set the filter state for future use

    setFilteredProducts(result);
  };

  useEffect(() => {
    if (searchQuery.trim() === "" && activeFilters.categories.length === 0) {
      setFilteredProducts(allProducts);
    } else {
      let result = allProducts;

      if (searchQuery.trim() !== "") {
        result = result.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }

      if (activeFilters.categories.length > 0) {
        result = result.filter((product) =>
          activeFilters.categories.includes(product.category),
        );
      }

      setFilteredProducts(result);
    }
  }, [searchQuery, activeFilters]);

  const renderProductCard = ({ item }: { item: (typeof allProducts)[0] }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/product-details",
          params: {
            id: item.id,
            name: item.name,
            price: item.price,
            icon: item.icon,
            details: item.details,
          },
        })
      }
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        width: cardWidth,
        borderWidth: 1,
        borderColor: "#F0F0F0",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View
        style={{
          backgroundColor: "#F7F7F7",
          borderRadius: 12,
          padding: 12,
          alignItems: "center",
          justifyContent: "center",
          minHeight: 100,
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 48 }}>{item.icon}</Text>
      </View>

      <Text
        style={{
          fontSize: 13,
          fontWeight: "600",
          color: "#181725",
          marginBottom: 4,
        }}
        numberOfLines={1}
      >
        {item.name}
      </Text>

      <Text
        style={{
          fontSize: 11,
          color: "#7C7C7C",
          marginBottom: 8,
        }}
        numberOfLines={1}
      >
        {item.details}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: "#53B175",
          }}
        >
          {item.price}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#53B175",
            width: 28,
            height: 28,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 14, color: "#fff", fontWeight: "700" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        {/* Location and Notifications */}
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

        {/* Search Bar with Filter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#F2F3F2",
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="magnify" size={20} color="#BDBDBD" />
            <TextInput
              style={{
                marginLeft: 12,
                flex: 1,
                fontSize: 14,
                color: "#181725",
              }}
              placeholder="Search Store"
              placeholderTextColor="#BDBDBD"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <MaterialCommunityIcons
                  name="close-circle"
                  size={20}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            onPress={() => setShowFilters(!showFilters)}
            style={{
              backgroundColor: "#53B175",
              width: 48,
              height: 48,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="tune-variant"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Results Count */}
        <Text
          style={{
            fontSize: 14,
            color: "#7C7C7C",
            marginTop: 16,
          }}
        >
          {filteredProducts.length} Results
        </Text>
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 60,
            }}
          >
            <MaterialCommunityIcons name="magnify" size={64} color="#E0E0E0" />
            <Text
              style={{
                fontSize: 16,
                color: "#7C7C7C",
                marginTop: 12,
              }}
            >
              No products found
            </Text>
          </View>
        }
      />

      {/* Filters Modal */}
      <FiltersModal
        visible={showFilters}
        onClose={() => setShowFilters(false)}
        onApply={applyFilters}
      />
    </SafeAreaView>
  );
}
