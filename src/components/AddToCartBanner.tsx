import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface AddToCartBannerProps {
  onOpenCart: () => void;
  quantity?: number;
}

export default function AddToCartBanner({
  onOpenCart,
  quantity = 1,
}: AddToCartBannerProps) {
  return (
    <View
      style={{
        backgroundColor: "#53B175",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 20,
      }}
    >
      {/* Left Side - Checkmark and Text */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          flex: 1,
        }}
      >
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="check" size={20} color="#fff" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Add to Cart
          </Text>
          {quantity > 0 && (
            <Text
              style={{
                fontSize: 12,
                color: "rgba(255, 255, 255, 0.8)",
                marginTop: 2,
              }}
            >
              {quantity} item{quantity > 1 ? "s" : ""}
            </Text>
          )}
        </View>
      </View>

      {/* Right Side - Open Cart */}
      <TouchableOpacity
        onPress={onOpenCart}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Open Cart
        </Text>
        <MaterialIcons name="chevron-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
