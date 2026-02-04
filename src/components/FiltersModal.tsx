import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface FilterState {
  categories: string[];
  brands: string[];
}

interface FiltersModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
}

const CATEGORIES = [
  "Eggs",
  "Noodles & Pasta",
  "Chips & Crisps",
  "Fast Food",
  "Fruits",
  "Beverages",
];

const BRANDS = [
  "Individual Collection",
  "Cocola",
  "Ifad",
  "Kazi Farmas",
  "Olam",
  "Dangote",
];

export default function FiltersModal({
  visible,
  onClose,
  onApply,
}: FiltersModalProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const handleApply = () => {
    onApply({
      categories: selectedCategories,
      brands: selectedBrands,
    });
    onClose();
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={false}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#F0F0F0",
          }}
        >
          <TouchableOpacity onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color="#181725" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#181725",
            }}
          >
            Filters
          </Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Filters Content */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Categories Section */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#181725",
                marginBottom: 16,
              }}
            >
              Categories
            </Text>
            <View style={{ gap: 12 }}>
              {CATEGORIES.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => toggleCategory(category)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      borderWidth: 2,
                      borderColor: selectedCategories.includes(category)
                        ? "#53B175"
                        : "#E0E0E0",
                      backgroundColor: selectedCategories.includes(category)
                        ? "#53B175"
                        : "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selectedCategories.includes(category) && (
                      <MaterialCommunityIcons
                        name="check"
                        size={16}
                        color="#fff"
                      />
                    )}
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: selectedCategories.includes(category)
                        ? "#53B175"
                        : "#181725",
                      fontWeight: selectedCategories.includes(category)
                        ? "500"
                        : "400",
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Brands Section */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#181725",
                marginBottom: 16,
              }}
            >
              Brand
            </Text>
            <View style={{ gap: 12 }}>
              {BRANDS.map((brand) => (
                <TouchableOpacity
                  key={brand}
                  onPress={() => toggleBrand(brand)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      borderWidth: 2,
                      borderColor: selectedBrands.includes(brand)
                        ? "#53B175"
                        : "#E0E0E0",
                      backgroundColor: selectedBrands.includes(brand)
                        ? "#53B175"
                        : "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selectedBrands.includes(brand) && (
                      <MaterialCommunityIcons
                        name="check"
                        size={16}
                        color="#fff"
                      />
                    )}
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: selectedBrands.includes(brand)
                        ? "#53B175"
                        : "#181725",
                      fontWeight: selectedBrands.includes(brand)
                        ? "500"
                        : "400",
                    }}
                  >
                    {brand}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Bottom Buttons */}
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={handleReset}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#53B175",
              borderRadius: 16,
              paddingVertical: 14,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#53B175",
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleApply}
            style={{
              flex: 1,
              backgroundColor: "#53B175",
              borderRadius: 16,
              paddingVertical: 14,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Apply Filter
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
