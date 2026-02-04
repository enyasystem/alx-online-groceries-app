import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  label,
  onPress,
  disabled = false,
  variant = "primary",
  size = "medium",
  style,
  textStyle,
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle: ViewStyle = {
      borderRadius: 19,
      alignItems: "center",
      justifyContent: "center",
    };

    const sizeStyles = {
      small: { paddingVertical: 8, paddingHorizontal: 16 },
      medium: { paddingVertical: 12, paddingHorizontal: 20 },
      large: { paddingVertical: 16, paddingHorizontal: 24 },
    };

    const variantStyles = {
      primary: {
        backgroundColor: disabled ? "#CCCCCC" : "#53B175",
      },
      secondary: {
        backgroundColor: "#F0F0F0",
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#53B175",
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };
  };

  const getTextStyle = () => {
    const baseFontSize = {
      small: 12,
      medium: 16,
      large: 18,
    };

    const variantTextStyles = {
      primary: { color: "#fff", fontWeight: "600" as const },
      secondary: { color: "#181725", fontWeight: "600" as const },
      outline: { color: "#53B175", fontWeight: "600" as const },
    };

    return {
      fontSize: baseFontSize[size],
      ...variantTextStyles[variant],
      ...textStyle,
    };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={getButtonStyle()}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{label}</Text>
    </TouchableOpacity>
  );
}
