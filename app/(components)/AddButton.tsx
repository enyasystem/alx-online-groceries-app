import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useCart } from "../../src/context/CartContext";

interface AddButtonProps {
  product: {
    id: number;
    name: string;
    size?: string;
    price: number;
    image?: string;
  };
  category: string;
}

export default function AddButton({ product, category }: AddButtonProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    const itemId = `${category}-${product.id}`;
    addItem({
      id: itemId,
      name: product.name,
      description: product.size || "",
      price: product.price,
      icon: product.image || "",
      quantity: 1,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleAdd}
      style={{
        backgroundColor: "#53B175",
        width: 32,
        height: 32,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600" }}>+</Text>
    </TouchableOpacity>
  );
}
