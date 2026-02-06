# Challenges & Solutions - Online Groceries App

This document tracks challenges encountered during development and their solutions.

## Table of Contents
- [Setup Challenges](#setup-challenges)
- [UI/Design Challenges](#uidesign-challenges)
- [Navigation Challenges](#navigation-challenges)
- [Performance Challenges](#performance-challenges)
- [Platform-Specific Challenges](#platform-specific-challenges)
- [Lessons Learned](#lessons-learned)

## Setup Challenges

### Challenge 1: NativeWind Configuration Issues

**Problem:**
NativeWind classes not applying correctly after initial setup. Styles weren't being processed.

**Solution:**
1. Ensured `babel.config.js` includes `"nativewind/babel"` plugin
2. Updated `tailwind.config.js` content paths to include all component directories
3. Cleared Metro bundler cache: `expo start -c`
4. Restarted development server

**Code:**
```javascript
// babel.config.js - Correct configuration
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      'react-native-reanimated/plugin', // Must be last
    ],
  };
};

// tailwind.config.js - Ensure all paths included
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ...
};
```

**Lessons:**
- Always restart Metro bundler after config changes
- Plugin order matters in babel.config.js
- Content paths must match project structure

---

### Challenge 2: TypeScript Path Aliases Not Working

**Problem:**
Import aliases like `@components` or `@screens` not resolving, causing module not found errors.

**Solution:**
1. Updated `tsconfig.json` with correct path mappings
2. Installed `babel-plugin-module-resolver`
3. Added resolver configuration to `babel.config.js`
4. Restarted TypeScript server in VS Code

**Code:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@screens/*": ["src/screens/*"],
      "@navigation/*": ["src/navigation/*"],
      "@types/*": ["src/types/*"]
    }
  }
}
```

```bash
npm install --save-dev babel-plugin-module-resolver
```

```javascript
// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};
```

**Lessons:**
- Both TypeScript and Babel need path configuration
- Must restart TS server after changes
- Consistent path structure is important

---

## UI/Design Challenges

### Challenge 3: Achieving Pixel-Perfect Design

**Problem:**
UI elements not matching Figma design exactly. Spacing and sizing inconsistencies.

**Solution:**
1. Used Figma's measurement tools to get exact values
2. Created design tokens for consistent spacing
3. Rounded measurements to 4px grid system
4. Used percentage widths where appropriate
5. Tested on multiple screen sizes

**Code:**
```typescript
// constants/theme.ts
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Usage
<View className="px-4 py-6"> {/* 16px horizontal, 24px vertical */}
```

**Lessons:**
- Use design tokens for consistency
- Test on actual devices, not just simulators
- Document deviation reasons when necessary

---

### Challenge 4: Custom Fonts Not Loading

**Problem:**
Custom fonts (Gilroy) not displaying after being added to the project.

**Solution:**
1. Verified font files were in correct format (.ttf or .otf)
2. Used `expo-font` to load fonts properly
3. Prevented app rendering until fonts loaded
4. Added fonts to Tailwind configuration

**Code:**
```tsx
// App.tsx
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = Font.useFonts({
    'Gilroy-Regular': require('./src/assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('./src/assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-SemiBold': require('./src/assets/fonts/Gilroy-SemiBold.ttf'),
    'Gilroy-Bold': require('./src/assets/fonts/Gilroy-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Navigation />;
}
```

**Lessons:**
- Always use expo-font for custom fonts
- Prevent app display until fonts load
- Test font loading on both platforms

---

### Challenge 5: Image Aspect Ratios

**Problem:**
Product images appearing stretched or squashed.

**Solution:**
1. Used `resizeMode="cover"` for consistent sizing
2. Set explicit aspect ratios or dimensions
3. Used `aspectRatio` style property
4. Ensured source images had consistent dimensions

**Code:**
```tsx
// Fixed aspect ratio
<Image 
  source={{ uri: productImage }}
  className="w-full rounded-xl"
  style={{ aspectRatio: 1 }}
  resizeMode="cover"
/>

// Fixed dimensions
<Image 
  source={{ uri: productImage }}
  className="w-32 h-32 rounded-xl"
  resizeMode="cover"
/>
```

**Lessons:**
- Always specify resizeMode
- Use aspectRatio for responsive images
- Prepare images at correct dimensions

---

## Navigation Challenges

### Challenge 6: Type-Safe Navigation

**Problem:**
TypeScript errors with React Navigation. Parameter types not being inferred correctly.

**Solution:**
1. Created comprehensive navigation type definitions
2. Used typed navigation hooks
3. Properly typed all screen components

**Code:**
```typescript
// navigation/types.ts
export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
  Category: { categoryId: string; categoryName: string };
  Cart: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetail'
>;

// Screen component
import type { HomeScreenNavigationProp } from '@navigation/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  const handleProductPress = (productId: string) => {
    navigation.navigate('ProductDetail', { productId });
  };
  
  return (/* ... */);
};
```

**Lessons:**
- Define navigation types early
- Use typed hooks throughout
- TypeScript prevents navigation errors

---

### Challenge 7: Tab Navigator Icons Not Updating

**Problem:**
Bottom tab icons not changing between focused/unfocused states.

**Solution:**
1. Used the `focused` parameter in `tabBarIcon`
2. Provided both filled and outline icon variants
3. Changed icon color based on focus state

**Code:**
```tsx
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName: keyof typeof Ionicons.glyphMap;
      
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Cart') {
        iconName = focused ? 'cart' : 'cart-outline';
      }
      
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#53B175',
    tabBarInactiveTintColor: '#7C7C7C',
  })}
>
  {/* Tabs */}
</Tab.Navigator>
```

**Lessons:**
- Always use the focused parameter
- Provide visual feedback for active state
- Test navigation state changes

---

## Performance Challenges

### Challenge 8: FlatList Performance with Images

**Problem:**
Scrolling lag when rendering many product cards with images.

**Solution:**
1. Implemented proper `keyExtractor`
2. Used `getItemLayout` for fixed-size items
3. Added `maxToRenderPerBatch` and `windowSize` optimization
4. Implemented image lazy loading
5. Used `React.memo` for list items

**Code:**
```tsx
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const renderItem = useCallback(({ item }: { item: Product }) => (
    <ProductCard product={item} />
  ), []);

  const keyExtractor = useCallback((item: Product) => item.id, []);

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
      initialNumToRender={10}
    />
  );
};

// Memoized list item
const ProductCard = React.memo(({ product }: { product: Product }) => {
  return (/* ... */);
});
```

**Lessons:**
- Optimize FlatList for better performance
- Use memoization for expensive renders
- Profile before and after optimization

---

### Challenge 9: App Bundle Size

**Problem:**
Large app bundle size due to assets and dependencies.

**Solution:**
1. Optimized images before adding to project
2. Used SVGs instead of PNGs for icons where possible
3. Removed unused dependencies
4. Enabled Hermes JavaScript engine
5. Used code splitting for screens

**Code:**
```json
// app.json
{
  "expo": {
    "jsEngine": "hermes",
    "android": {
      "enableProguardInReleaseBuilds": true,
      "enableShrinkResourcesInReleaseBuilds": true
    }
  }
}
```

**Lessons:**
- Optimize assets early in development
- Audit dependencies regularly
- Enable production optimizations

---

## Platform-Specific Challenges

### Challenge 10: Shadow Differences (iOS vs Android)

**Problem:**
Shadows appearing differently on iOS and Android. Android not showing NativeWind shadows.

**Solution:**
1. Used StyleSheet for shadows on Android
2. Used `elevation` for Android, `shadow` properties for iOS
3. Created cross-platform shadow utility

**Code:**
```tsx
// utils/shadows.ts
import { Platform, ViewStyle } from 'react-native';

export const createShadow = (
  elevation: number = 3
): ViewStyle => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: elevation },
      shadowOpacity: 0.1,
      shadowRadius: elevation * 2,
    };
  }
  return {
    elevation,
  };
};

// Usage
<View 
  className="bg-white rounded-2xl p-4"
  style={createShadow(3)}
>
  <Text>Card with shadow</Text>
</View>
```

**Lessons:**
- Always test on both platforms
- Use platform-specific code when needed
- Create utilities for common patterns

---

### Challenge 11: Keyboard Avoiding View

**Problem:**
Input fields being covered by keyboard on both platforms.

**Solution:**
1. Used `KeyboardAvoidingView` component
2. Set appropriate behavior for each platform
3. Wrapped forms in `ScrollView` for scrolling
4. Used `KeyboardAwareScrollView` library for complex forms

**Code:**
```tsx
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const SignInScreen: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Form inputs */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
```

**Lessons:**
- Different behavior needed for iOS/Android
- Test keyboard interactions thoroughly
- Consider using specialized libraries

---

## State Management Challenges

### Challenge 12: Cart State Persistence

**Problem:**
Cart items lost when app is closed or reloaded.

**Solution:**
1. Used AsyncStorage to persist cart data
2. Loaded cart data on app initialization
3. Updated storage whenever cart changes
4. Implemented error handling for storage operations

**Code:**
```tsx
// hooks/useCart.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_STORAGE_KEY = '@cart_items';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart on mount
  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const saveCart = async (cartItems: CartItem[]) => {
    try {
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  const addItem = (item: Product) => {
    const newItems = [...items, { ...item, quantity: 1 }];
    setItems(newItems);
    saveCart(newItems);
  };

  return { items, addItem, /* other functions */ };
};
```

**Lessons:**
- Persist important state to storage
- Handle async operations properly
- Implement error recovery

---

## Animation Challenges

### Challenge 13: Smooth Animations

**Problem:**
Choppy animations when transitioning between screens or animating components.

**Solution:**
1. Used `react-native-reanimated` for performant animations
2. Utilized `useAnimatedStyle` and `withTiming`
3. Set proper animation durations
4. Used `LayoutAnimation` for simple transitions

**Code:**
```tsx
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming 
} from 'react-native-reanimated';

const AnimatedButton: React.FC = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withTiming(0.95, { duration: 100 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity 
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text>Press Me</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
```

**Lessons:**
- Use reanimated for complex animations
- Keep animations subtle and quick
- Test on actual devices

---

## Testing Challenges

### Challenge 14: Testing Setup

**Problem:**
Difficulty setting up testing environment for React Native with TypeScript.

**Solution:**
1. Installed Jest and React Native Testing Library
2. Configured Jest for React Native
3. Created test utilities and mocks
4. Wrote component tests

**Code:**
```bash
npm install --save-dev @testing-library/react-native @testing-library/jest-native jest
```

```javascript
// jest.config.js
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
```

**Lessons:**
- Set up testing early
- Write tests alongside components
- Mock external dependencies

---

## Lessons Learned

### Best Practices Discovered
1. **Start with Setup:** Get configuration right before building
2. **Use Design Tokens:** Create constants for consistent styling
3. **Type Everything:** TypeScript catches errors early
4. **Test Early:** Don't wait until the end to test
5. **Optimize Assets:** Compress images before adding them
6. **Document as You Go:** Don't postpone documentation
7. **Use Git Properly:** Commit often with clear messages
8. **Platform Test:** Check both iOS and Android regularly
9. **Ask for Help:** Don't struggle alone, use documentation
10. **Iterate:** Build, test, improve continuously

### Time Management
- **Planning:** 10% - Design analysis, setup planning
- **Setup:** 15% - Project initialization, configuration
- **Components:** 30% - Building reusable components
- **Screens:** 25% - Implementing all screens
- **Polish:** 15% - Animations, optimization
- **Testing & Docs:** 5% - Final testing and documentation

### What Worked Well
- Planning components before coding
- Using design tokens from the start
- Regular commits to Git
- Testing on real devices frequently
- Following Figma design closely

### What Could Be Improved
- Could have set up testing earlier
- Should have optimized images from the beginning
- Better time estimation for features
- More frequent code reviews

---

**Every challenge is an opportunity to learn and improve! 💪**

## Your Challenges

### Challenge [Number]: [Title]

**Problem:**
[Describe the problem you encountered]

**Solution:**
[Describe how you solved it]

**Code (if applicable):**
```tsx
// Your code solution
```

**Lessons:**
[What you learned from this challenge]

---

*Keep documenting challenges as you encounter them. This helps with learning and can assist others facing similar issues!*
