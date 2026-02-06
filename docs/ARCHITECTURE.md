# Architecture Guide - Online Groceries App

This document outlines the architecture, patterns, and conventions used in the Online Groceries App.

## Table of Contents
- [Project Structure](#project-structure)
- [Architecture Patterns](#architecture-patterns)
- [Navigation Structure](#navigation-structure)
- [State Management](#state-management)
- [File Organization](#file-organization)
- [Naming Conventions](#naming-conventions)

## Project Structure

```
alx-online-groceries-app/
├── src/
│   ├── assets/                 # Static assets
│   │   ├── fonts/             # Custom fonts
│   │   ├── icons/             # SVG/PNG icons
│   │   └── images/            # Images and illustrations
│   ├── components/            # Reusable components
│   │   ├── common/           # Generic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Header.tsx
│   │   │   └── index.ts      # Barrel export
│   │   ├── products/         # Product-related components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── CategoryCard.tsx
│   │   │   └── index.ts
│   │   └── cart/             # Cart-related components
│   │       ├── CartItem.tsx
│   │       ├── CartSummary.tsx
│   │       └── index.ts
│   ├── screens/              # Screen components
│   │   ├── auth/            # Authentication screens
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── OnboardingScreen.tsx
│   │   │   ├── SignInScreen.tsx
│   │   │   └── SignUpScreen.tsx
│   │   ├── home/            # Home/Shop screens
│   │   │   ├── HomeScreen.tsx
│   │   │   └── ShopScreen.tsx
│   │   ├── product/         # Product screens
│   │   │   ├── ProductDetailScreen.tsx
│   │   │   ├── CategoryScreen.tsx
│   │   │   └── SearchScreen.tsx
│   │   ├── cart/
│   │   │   ├── CartScreen.tsx
│   │   │   └── CheckoutScreen.tsx
│   │   ├── favorites/
│   │   │   └── FavoritesScreen.tsx
│   │   └── account/
│   │       ├── AccountScreen.tsx
│   │       ├── OrdersScreen.tsx
│   │       └── ProfileEditScreen.tsx
│   ├── navigation/           # Navigation configuration
│   │   ├── AppNavigator.tsx        # Main app navigator
│   │   ├── AuthNavigator.tsx       # Auth flow navigator
│   │   ├── TabNavigator.tsx        # Bottom tab navigator
│   │   └── types.ts                # Navigation types
│   ├── types/                # TypeScript types
│   │   ├── index.ts
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── user.ts
│   │   └── navigation.ts
│   ├── constants/            # App constants
│   │   ├── colors.ts
│   │   ├── theme.ts
│   │   ├── layout.ts
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   ├── helpers.ts
│   │   ├── validation.ts
│   │   └── formatters.ts
│   └── hooks/               # Custom React hooks
│       ├── useCart.ts
│       ├── useFavorites.ts
│       └── useDebounce.ts
├── docs/                    # Documentation
├── App.tsx                  # App entry point
├── app.json                 # Expo configuration
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Architecture Patterns

### Component Architecture

#### 1. Atomic Design Principles
Components are organized following a modified atomic design pattern:

- **Atoms** (`components/common/`): Basic building blocks
  - Button, Input, Text, Icon
- **Molecules** (`components/products/`, `components/cart/`): Simple component combinations
  - ProductCard, CartItem, SearchBar
- **Organisms**: Complex component compositions
  - ProductList, CategoryGrid, CartSummary
- **Screens** (`screens/`): Full page compositions
  - HomeScreen, ProductDetailScreen

#### 2. Component Structure Template
```tsx
// ProductCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Types
interface ProductCardProps {
  product: Product;
  onPress: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

// Component
const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress, 
  onAddToCart 
}) => {
  // Hooks (if any)
  
  // Handlers
  const handlePress = () => {
    onPress(product.id);
  };
  
  const handleAddToCart = () => {
    onAddToCart(product);
  };
  
  // Render
  return (
    <TouchableOpacity 
      className="bg-white rounded-2xl p-4 shadow-sm"
      onPress={handlePress}
    >
      <Image 
        source={{ uri: product.image }} 
        className="w-full h-32 rounded-xl"
      />
      <Text className="text-text-primary font-semibold mt-2">
        {product.name}
      </Text>
      <Text className="text-text-secondary text-sm">
        {product.description}
      </Text>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-primary font-bold text-lg">
          ${product.price}
        </Text>
        <TouchableOpacity 
          onPress={handleAddToCart}
          className="bg-primary rounded-full p-2"
        >
          <Text className="text-white">+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
```

### Screen Structure Template
```tsx
// HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Header, SearchBar, CategoryCard, ProductList } from '@components';

// Types
import type { RootStackParamList } from '@navigation/types';
import type { Product, Category } from '@types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  // Navigation
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  // State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Effects
  useEffect(() => {
    loadData();
  }, []);
  
  // Handlers
  const loadData = async () => {
    // Load products and categories
  };
  
  const handleProductPress = (productId: string) => {
    navigation.navigate('ProductDetail', { productId });
  };
  
  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate('Category', { categoryId });
  };
  
  // Render
  return (
    <View className="flex-1 bg-background">
      <Header />
      <ScrollView>
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        <View className="px-4 py-6">
          <Text className="text-2xl font-bold text-text-primary mb-4">
            Shop by Category
          </Text>
          {/* Categories */}
        </View>
        
        <View className="px-4">
          <Text className="text-2xl font-bold text-text-primary mb-4">
            Exclusive Offers
          </Text>
          <ProductList 
            products={products}
            onProductPress={handleProductPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
```

## Navigation Structure

### Navigation Flow
```
App
├── SplashScreen
├── OnboardingScreen
└── AuthNavigator
    ├── SignInScreen
    └── SignUpScreen
    
└── MainNavigator (after auth)
    ├── TabNavigator
    │   ├── HomeStack
    │   │   ├── HomeScreen
    │   │   ├── ProductDetailScreen
    │   │   └── CategoryScreen
    │   ├── ShopStack
    │   │   └── ShopScreen
    │   ├── CartStack
    │   │   ├── CartScreen
    │   │   └── CheckoutScreen
    │   ├── FavoritesStack
    │   │   └── FavoritesScreen
    │   └── AccountStack
    │       ├── AccountScreen
    │       ├── OrdersScreen
    │       └── ProfileEditScreen
    └── ModalStack (overlays)
        ├── SearchScreen
        └── FilterScreen
```

### Navigation Implementation

#### AppNavigator.tsx
```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '@screens/auth/SplashScreen';
import OnboardingScreen from '@screens/auth/OnboardingScreen';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {isFirstLaunch && (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
```

## State Management

### Local State with Hooks
For component-level state, use React hooks:

```tsx
// Simple state
const [count, setCount] = useState(0);

// Complex state with useReducer
const [state, dispatch] = useReducer(reducer, initialState);

// Custom hooks for reusable logic
const { cart, addToCart, removeFromCart } = useCart();
```

### Context API for Global State
For app-wide state (cart, favorites, user):

```tsx
// contexts/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  items: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addItem = (product: Product) => {
    // Implementation
  };
  
  const removeItem = (id: string) => {
    // Implementation
  };
  
  const clearCart = () => {
    setItems([]);
  };
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
```

## File Organization

### Barrel Exports (index.ts)
Use barrel exports for cleaner imports:

```typescript
// components/common/index.ts
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
export { default as Header } from './Header';

// Usage in other files
import { Button, Input, Card } from '@components/common';
```

### Path Aliases
Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "@components": ["src/components"],
      "@screens": ["src/screens"],
      "@navigation": ["src/navigation"],
      "@types": ["src/types"],
      "@constants": ["src/constants"],
      "@utils": ["src/utils"],
      "@hooks": ["src/hooks"]
    }
  }
}
```

## Naming Conventions

### Files and Folders
- **Components:** PascalCase - `ProductCard.tsx`, `CartItem.tsx`
- **Screens:** PascalCase with "Screen" suffix - `HomeScreen.tsx`
- **Utils/Helpers:** camelCase - `formatPrice.ts`, `validation.ts`
- **Types:** camelCase - `product.ts`, `user.ts`
- **Constants:** camelCase - `colors.ts`, `theme.ts`
- **Folders:** lowercase or kebab-case - `components/`, `utils/`

### Variables and Functions
- **Variables:** camelCase - `userName`, `productList`
- **Constants:** UPPER_SNAKE_CASE - `API_URL`, `MAX_ITEMS`
- **Functions:** camelCase - `handlePress`, `formatPrice`
- **Components:** PascalCase - `ProductCard`, `Button`
- **Hooks:** camelCase with "use" prefix - `useCart`, `useFavorites`

### TypeScript Types/Interfaces
- **Interfaces:** PascalCase with "I" prefix (optional) - `Product`, `IUserProps`
- **Types:** PascalCase - `NavigationProps`, `CartItem`
- **Enums:** PascalCase - `OrderStatus`, `PaymentMethod`

## Code Organization Best Practices

### 1. Single Responsibility
Each component should have a single, well-defined purpose.

### 2. DRY (Don't Repeat Yourself)
Extract reusable logic into custom hooks or utility functions.

### 3. Component Composition
Build complex UIs by composing smaller components.

### 4. Props Interface
Always define TypeScript interfaces for component props.

### 5. Error Boundaries
Implement error boundaries for graceful error handling.

### 6. Code Comments
Use JSDoc comments for complex functions:
```typescript
/**
 * Formats a price number to currency string
 * @param price - The price number to format
 * @param currency - Currency code (default: 'USD')
 * @returns Formatted price string
 */
const formatPrice = (price: number, currency: string = 'USD'): string => {
  // Implementation
};
```

## Performance Considerations

### 1. Memoization
Use `React.memo`, `useMemo`, and `useCallback` appropriately:
```tsx
const ProductCard = React.memo(({ product }) => {
  // Component implementation
});
```

### 2. Lazy Loading
Lazy load screens and heavy components:
```tsx
const ProductDetailScreen = lazy(() => import('@screens/product/ProductDetailScreen'));
```

### 3. List Optimization
Use `FlatList` or `SectionList` for long lists with proper `keyExtractor` and `getItemLayout`.

### 4. Image Optimization
Use optimized image formats and lazy loading for images.

---

**This architecture ensures scalability, maintainability, and follows React Native best practices.**
