import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface AddToCartButtonProps {
  onPress: () => void;
  disabled?: boolean;
  size?: number;
}

export default function AddToCartButton({
  onPress,
  disabled = false,
  size = 56,
}: AddToCartButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: disabled ? "#CCCCCC" : "#53B175",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: "#53B175",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      }}
      activeOpacity={0.8}
    >
      <MaterialIcons name="add" size={size * 0.5} color="#fff" />
    </TouchableOpacity>
  );
}
