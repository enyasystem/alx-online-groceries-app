# Components Guide - Online Groceries App

This guide provides detailed instructions for building reusable components for the Online Groceries App.

## Table of Contents
- [Component Principles](#component-principles)
- [Common Components](#common-components)
- [Product Components](#product-components)
- [Cart Components](#cart-components)
- [Component Testing](#component-testing)

## Component Principles

### 1. Reusability
Components should be generic enough to be used in multiple contexts.

### 2. Single Responsibility
Each component should do one thing well.

### 3. Props Interface
Always define TypeScript interfaces for props.

### 4. Composition Over Inheritance
Build complex components by composing simpler ones.

### 5. Accessibility
Include accessibility props (accessibilityLabel, accessibilityRole, etc.).

## Common Components

### Button Component

**File:** `src/components/common/Button.tsx`

```tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  icon,
  disabled,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'outline':
        return 'bg-transparent border-2 border-primary';
      case 'ghost':
        return 'bg-transparent';
      default:
        return 'bg-primary';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'py-2 px-4';
      case 'medium':
        return 'py-3 px-6';
      case 'large':
        return 'py-4 px-8';
      default:
        return 'py-3 px-6';
    }
  };

  const getTextStyles = () => {
    const baseStyles = 'font-semibold text-center';
    const variantStyles =
      variant === 'outline' || variant === 'ghost'
        ? 'text-primary'
        : 'text-white';
    const sizeStyles = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base';
    return `${baseStyles} ${variantStyles} ${sizeStyles}`;
  };

  return (
    <TouchableOpacity
      className={`
        rounded-2xl
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50' : ''}
        flex-row items-center justify-center
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? '#53B175' : '#FFFFFF'}
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text className={getTextStyles()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
```

**Usage:**
```tsx
<Button title="Add to Cart" variant="primary" onPress={handleAddToCart} />
<Button title="Cancel" variant="outline" onPress={handleCancel} />
<Button title="Loading..." variant="primary" loading={true} />
```

### Input Component

**File:** `src/components/common/Input.tsx`

```tsx
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  secure?: boolean;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  secure = false,
  helperText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secure);

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-text-secondary text-sm font-medium mb-2">
          {label}
        </Text>
      )}
      <View
        className={`
          flex-row items-center
          bg-background
          border rounded-2xl
          px-4
          ${isFocused ? 'border-primary' : 'border-border'}
          ${error ? 'border-error' : ''}
        `}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={isFocused ? '#53B175' : '#7C7C7C'}
            style={{ marginRight: 8 }}
          />
        )}
        <TextInput
          className="flex-1 py-4 text-text-primary"
          placeholderTextColor="#B3B3B3"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secure && !isPasswordVisible}
          {...props}
        />
        {secure && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#7C7C7C"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-error text-xs mt-1">{error}</Text>
      )}
      {helperText && !error && (
        <Text className="text-text-secondary text-xs mt-1">{helperText}</Text>
      )}
    </View>
  );
};

export default Input;
```

**Usage:**
```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  icon="mail-outline"
  keyboardType="email-address"
  value={email}
  onChangeText={setEmail}
  error={emailError}
/>

<Input
  label="Password"
  placeholder="Enter your password"
  icon="lock-closed-outline"
  secure
  value={password}
  onChangeText={setPassword}
/>
```

### Card Component

**File:** `src/components/common/Card.tsx`

```tsx
import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  children,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-white shadow-md';
      case 'outlined':
        return 'bg-white border border-border';
      case 'filled':
        return 'bg-gray-50';
      default:
        return 'bg-white shadow-md';
    }
  };

  return (
    <View
      className={`rounded-2xl p-4 ${getVariantStyles()} ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;
```

**Usage:**
```tsx
<Card variant="elevated">
  <Text>Content here</Text>
</Card>
```

### Header Component

**File:** `src/components/common/Header.tsx`

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  rightIcon,
  onRightPress,
}) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between px-4 py-4 bg-white">
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#181725" />
        </TouchableOpacity>
      ) : (
        <View className="w-6" />
      )}

      {title && (
        <Text className="text-xl font-bold text-text-primary">{title}</Text>
      )}

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress}>
          <Ionicons name={rightIcon} size={24} color="#181725" />
        </TouchableOpacity>
      ) : (
        <View className="w-6" />
      )}
    </View>
  );
};

export default Header;
```

### SearchBar Component

**File:** `src/components/common/SearchBar.tsx`

```tsx
import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
}) => {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mx-4 my-4">
      <Ionicons name="search" size={20} color="#7C7C7C" />
      <TextInput
        className="flex-1 ml-2 text-base text-text-primary"
        placeholder={placeholder}
        placeholderTextColor="#B3B3B3"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
```

## Product Components

### ProductCard Component

**File:** `src/components/products/ProductCard.tsx`

```tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  unit: string;
}

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPress,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 m-2 shadow-sm border border-border"
      style={{ width: 160 }}
    >
      <Image
        source={{ uri: product.image }}
        className="w-full h-24 rounded-xl"
        resizeMode="cover"
      />
      
      <Text
        className="text-text-primary font-semibold text-base mt-3"
        numberOfLines={1}
      >
        {product.name}
      </Text>
      
      <Text className="text-text-secondary text-xs mt-1" numberOfLines={1}>
        {product.description}
      </Text>
      
      <Text className="text-text-secondary text-xs mt-1">
        {product.unit}
      </Text>
      
      <View className="flex-row justify-between items-center mt-3">
        <Text className="text-text-primary font-bold text-lg">
          ${product.price.toFixed(2)}
        </Text>
        
        <TouchableOpacity
          onPress={onAddToCart}
          className="bg-primary rounded-xl p-2"
        >
          <Ionicons name="add" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
```

### CategoryCard Component

**File:** `src/components/products/CategoryCard.tsx`

```tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-2xl p-6 m-2 items-center justify-center"
      style={{
        width: 160,
        height: 180,
        backgroundColor: category.color + '20', // Add opacity
        borderColor: category.color,
        borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: category.image }}
        className="w-24 h-24"
        resizeMode="contain"
      />
      <Text className="text-text-primary font-semibold text-base mt-4 text-center">
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
```

### ProductList Component

**File:** `src/components/products/ProductList.tsx`

```tsx
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  unit: string;
}

interface ProductListProps {
  products: Product[];
  onProductPress: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  numColumns?: number;
  emptyMessage?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductPress,
  onAddToCart,
  numColumns = 2,
  emptyMessage = 'No products found',
}) => {
  if (products.length === 0) {
    return (
      <View className="flex-1 items-center justify-center py-20">
        <Text className="text-text-secondary text-lg">{emptyMessage}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => onProductPress(item.id)}
          onAddToCart={() => onAddToCart(item)}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
```

## Cart Components

### CartItem Component

**File:** `src/components/cart/CartItem.tsx`

```tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

interface CartItemProps {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <View className="flex-row items-center bg-white p-4 mb-2 rounded-2xl border border-border">
      <Image
        source={{ uri: item.image }}
        className="w-20 h-20 rounded-xl"
        resizeMode="cover"
      />
      
      <View className="flex-1 ml-4">
        <Text className="text-text-primary font-semibold text-base">
          {item.name}
        </Text>
        <Text className="text-text-secondary text-xs mt-1">
          {item.unit}
        </Text>
        
        <View className="flex-row items-center mt-2">
          <TouchableOpacity
            onPress={onDecrement}
            className="border border-border rounded-lg p-1"
          >
            <Ionicons name="remove" size={16} color="#7C7C7C" />
          </TouchableOpacity>
          
          <Text className="text-text-primary font-semibold text-base mx-4">
            {item.quantity}
          </Text>
          
          <TouchableOpacity
            onPress={onIncrement}
            className="border border-primary rounded-lg p-1"
          >
            <Ionicons name="add" size={16} color="#53B175" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View className="items-end">
        <TouchableOpacity onPress={onRemove}>
          <Ionicons name="close" size={24} color="#7C7C7C" />
        </TouchableOpacity>
        
        <Text className="text-text-primary font-bold text-lg mt-8">
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;
```

### CartSummary Component

**File:** `src/components/cart/CartSummary.tsx`

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../common/Button';

interface CartSummaryProps {
  subtotal: number;
  delivery: number;
  total: number;
  onCheckout: () => void;
  loading?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  delivery,
  total,
  onCheckout,
  loading = false,
}) => {
  return (
    <View className="bg-white p-6 rounded-t-3xl border-t border-border">
      <View className="flex-row justify-between mb-3">
        <Text className="text-text-secondary text-base">Subtotal</Text>
        <Text className="text-text-primary font-semibold text-base">
          ${subtotal.toFixed(2)}
        </Text>
      </View>
      
      <View className="flex-row justify-between mb-4">
        <Text className="text-text-secondary text-base">Delivery</Text>
        <Text className="text-text-primary font-semibold text-base">
          ${delivery.toFixed(2)}
        </Text>
      </View>
      
      <View className="border-t border-border pt-4 mb-4">
        <View className="flex-row justify-between">
          <Text className="text-text-primary font-bold text-lg">Total</Text>
          <Text className="text-primary font-bold text-xl">
            ${total.toFixed(2)}
          </Text>
        </View>
      </View>
      
      <Button
        title="Proceed to Checkout"
        variant="primary"
        fullWidth
        onPress={onCheckout}
        loading={loading}
      />
    </View>
  );
};

export default CartSummary;
```

## Component Testing

### Example Test File

**File:** `src/components/common/__tests__/Button.test.tsx`

```tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button Component', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    const { getByTestId } = render(
      <Button title="Test Button" loading={true} />
    );
    
    // ActivityIndicator should be rendered
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('is disabled when loading', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" loading={true} onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
```

## Component Documentation Template

For each component, document:

```tsx
/**
 * Button Component
 * 
 * A customizable button component with different variants and sizes.
 * 
 * @example
 * ```tsx
 * <Button 
 *   title="Add to Cart" 
 *   variant="primary" 
 *   size="large"
 *   onPress={handlePress}
 * />
 * ```
 * 
 * @param {string} title - Button text
 * @param {string} variant - Button style variant (primary, secondary, outline, ghost)
 * @param {string} size - Button size (small, medium, large)
 * @param {boolean} loading - Show loading indicator
 * @param {boolean} fullWidth - Make button full width
 * @param {Function} onPress - Press handler
 */
```

## Best Practices

1. **Keep components small and focused**
2. **Use TypeScript for type safety**
3. **Document props and usage**
4. **Make components accessible**
5. **Test edge cases**
6. **Use meaningful prop names**
7. **Provide sensible defaults**
8. **Handle loading and error states**

---

**Build reusable, maintainable components for a scalable app! 🧩**
