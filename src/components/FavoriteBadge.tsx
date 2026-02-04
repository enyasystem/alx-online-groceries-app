import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useFavorites } from "../context/FavoritesContext";

interface FavoriteBadgeProps {
  productKey: string; // composite key `${category}-${id}`
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
}

export default function FavoriteBadge({
  productKey,
  productName,
  productDescription,
  productPrice,
  productImage,
}: FavoriteBadgeProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isLiked = isFavorite(productKey);

  const handleToggleFavorite = () => {
    if (isLiked) {
      removeFavorite(productKey);
    } else {
      addFavorite({
        id: productKey,
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={handleToggleFavorite}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <MaterialCommunityIcons
        name={isLiked ? "heart" : "heart-outline"}
        size={20}
        color={isLiked ? "#53B175" : "#BDBDBD"}
      />
    </TouchableOpacity>
  );
}
