import { Image, Text, View, ViewStyle } from "react-native";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  id: string | number;
  image: string | number;
  name: string;
  details: string;
  price: number;
  onAddToCart: (productId: string | number) => void;
  style?: ViewStyle;
}

export default function ProductCard({
  id,
  image,
  name,
  details,
  price,
  onAddToCart,
  style,
}: ProductCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
        borderColor: "#F0F0F0",
        borderWidth: 1,
        ...style,
      }}
    >
      {/* Product Image */}
      <View
        style={{
          width: "100%",
          height: 200,
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 12,
          backgroundColor: "#F0F0F0",
        }}
      >
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>

      {/* Product Info */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#181725",
          marginBottom: 4,
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "#7C7C7C",
          marginBottom: 12,
        }}
      >
        {details}
      </Text>

      {/* Price and Add Button */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            color: "#181725",
          }}
        >
          ${price.toFixed(2)}
        </Text>
        <AddToCartButton onPress={() => onAddToCart(id)} />
      </View>
    </View>
  );
}
