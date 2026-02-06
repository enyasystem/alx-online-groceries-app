# Styling Guide - Online Groceries App

This guide covers styling conventions, design system, and best practices for the Online Groceries App.

## Table of Contents
- [Design System](#design-system)
- [NativeWind Usage](#nativewind-usage)
- [Typography](#typography)
- [Colors](#colors)
- [Spacing](#spacing)
- [Layout Patterns](#layout-patterns)
- [Responsive Design](#responsive-design)

## Design System

### Design Tokens

**File:** `src/constants/theme.ts`

```typescript
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#53B175',
      light: '#6CC788',
      dark: '#429D61',
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#53B175',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
    },
    secondary: {
      DEFAULT: '#F8A44C',
      light: '#F9B668',
      dark: '#E6933A',
    },
    background: {
      DEFAULT: '#FFFFFF',
      light: '#F8F8F8',
      dark: '#181725',
    },
    text: {
      primary: '#181725',
      secondary: '#7C7C7C',
      light: '#B3B3B3',
      white: '#FFFFFF',
    },
    border: {
      DEFAULT: '#E2E2E2',
      light: '#F0F0F0',
      dark: '#D1D1D1',
    },
    status: {
      error: '#F44336',
      success: '#4CAF50',
      warning: '#FFC107',
      info: '#2196F3',
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
    '4xl': 64,
  },
  
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    full: 9999,
  },
  
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};

export default theme;
```

### Color Palette

**File:** `src/constants/colors.ts`

```typescript
export const colors = {
  // Primary Colors
  primary: '#53B175',
  primaryLight: '#6CC788',
  primaryDark: '#429D61',
  
  // Secondary Colors
  secondary: '#F8A44C',
  secondaryLight: '#F9B668',
  secondaryDark: '#E6933A',
  
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  background: '#FFFFFF',
  backgroundLight: '#F8F8F8',
  backgroundDark: '#181725',
  
  // Text
  textPrimary: '#181725',
  textSecondary: '#7C7C7C',
  textLight: '#B3B3B3',
  textWhite: '#FFFFFF',
  
  // Borders
  border: '#E2E2E2',
  borderLight: '#F0F0F0',
  borderDark: '#D1D1D1',
  
  // Status
  error: '#F44336',
  success: '#4CAF50',
  warning: '#FFC107',
  info: '#2196F3',
  
  // Category Colors (from Figma)
  categoryFruits: '#53B175',
  categoryVegetables: '#F8A44C',
  categoryDairy: '#F7A593',
  categoryMeat: '#D3B0E0',
  categoryBakery: '#FDE598',
  categoryBeverages: '#B7DFF5',
};

export default colors;
```

## NativeWind Usage

### Basic Usage

```tsx
import React from 'react';
import { View, Text } from 'react-native';

// Basic styling
<View className="bg-white p-4 rounded-2xl">
  <Text className="text-text-primary font-semibold text-lg">
    Hello World
  </Text>
</View>

// Multiple classes
<View className="flex-row items-center justify-between px-4 py-2">
  <Text className="text-base">Left</Text>
  <Text className="text-base">Right</Text>
</View>

// Conditional classes
<View className={`
  p-4 rounded-xl
  ${isActive ? 'bg-primary' : 'bg-gray-100'}
  ${disabled && 'opacity-50'}
`}>
  <Text>Content</Text>
</View>
```

### Common Class Patterns

#### Flexbox Layouts
```tsx
// Row layout
<View className="flex-row items-center justify-between">

// Column layout
<View className="flex-col items-start">

// Centered content
<View className="flex-1 items-center justify-center">

// Space between items
<View className="flex-row justify-around">
```

#### Spacing
```tsx
// Padding
<View className="p-4">         {/* All sides */}
<View className="px-4 py-2">   {/* Horizontal & Vertical */}
<View className="pt-4 pb-2">   {/* Top & Bottom */}

// Margin
<View className="m-4">         {/* All sides */}
<View className="mx-4 my-2">   {/* Horizontal & Vertical */}
<View className="mt-4 mb-2">   {/* Top & Bottom */}

// Gap (for flex containers)
<View className="flex-row gap-2">
```

#### Sizing
```tsx
// Width
<View className="w-full">      {/* 100% */}
<View className="w-1/2">       {/* 50% */}
<View className="w-20">        {/* 80px (20 * 4) */}

// Height
<View className="h-full">      {/* 100% */}
<View className="h-40">        {/* 160px */}

// Aspect ratio
<View className="aspect-square"> {/* 1:1 */}
<View className="aspect-video">  {/* 16:9 */}
```

#### Borders & Shadows
```tsx
// Borders
<View className="border border-border">
<View className="border-2 border-primary">
<View className="border-b border-gray-200">

// Border radius
<View className="rounded-lg">    {/* 12px */}
<View className="rounded-xl">    {/* 16px */}
<View className="rounded-2xl">   {/* 20px */}
<View className="rounded-full">  {/* Fully rounded */}

// Shadow (use StyleSheet for shadows on Android)
<View className="shadow-sm">
<View className="shadow-md">
```

## Typography

### Font Definitions

After loading custom fonts (e.g., Gilroy):

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        regular: ['Gilroy-Regular'],
        medium: ['Gilroy-Medium'],
        semibold: ['Gilroy-SemiBold'],
        bold: ['Gilroy-Bold'],
      },
    },
  },
};
```

### Typography Usage

```tsx
// Font families
<Text className="font-regular">Regular Text</Text>
<Text className="font-medium">Medium Text</Text>
<Text className="font-semibold">SemiBold Text</Text>
<Text className="font-bold">Bold Text</Text>

// Font sizes
<Text className="text-xs">12px</Text>      {/* Extra small */}
<Text className="text-sm">14px</Text>      {/* Small */}
<Text className="text-base">16px</Text>    {/* Base */}
<Text className="text-lg">18px</Text>      {/* Large */}
<Text className="text-xl">20px</Text>      {/* Extra large */}
<Text className="text-2xl">24px</Text>     {/* 2X large */}
<Text className="text-3xl">30px</Text>     {/* 3X large */}

// Text colors
<Text className="text-text-primary">Primary Text</Text>
<Text className="text-text-secondary">Secondary Text</Text>
<Text className="text-primary">Primary Color</Text>
<Text className="text-white">White Text</Text>

// Text alignment
<Text className="text-left">Left</Text>
<Text className="text-center">Center</Text>
<Text className="text-right">Right</Text>

// Text transformation
<Text className="uppercase">UPPERCASE</Text>
<Text className="lowercase">lowercase</Text>
<Text className="capitalize">Capitalized</Text>
```

### Typography Scale

```tsx
// Headings
<Text className="text-4xl font-bold text-text-primary">
  H1 Heading
</Text>

<Text className="text-3xl font-bold text-text-primary">
  H2 Heading
</Text>

<Text className="text-2xl font-semibold text-text-primary">
  H3 Heading
</Text>

<Text className="text-xl font-semibold text-text-primary">
  H4 Heading
</Text>

// Body text
<Text className="text-base font-regular text-text-primary">
  Regular body text
</Text>

<Text className="text-sm font-regular text-text-secondary">
  Small body text
</Text>

// Captions
<Text className="text-xs font-regular text-text-secondary">
  Caption text
</Text>
```

## Colors

### Using Colors

```tsx
// Background colors
<View className="bg-white">
<View className="bg-primary">
<View className="bg-secondary">
<View className="bg-gray-100">

// Text colors
<Text className="text-text-primary">
<Text className="text-primary">
<Text className="text-error">

// Border colors
<View className="border border-border">
<View className="border border-primary">
```

### Color Opacity

```tsx
// Using opacity classes
<View className="bg-primary opacity-50">
<View className="bg-black opacity-20">

// Or with color variants (if configured in Tailwind)
<View className="bg-primary/50">  {/* 50% opacity */}
<View className="bg-black/20">   {/* 20% opacity */}
```

## Spacing

### Spacing Scale

Based on 4px base unit:

```
0   = 0px
1   = 4px
2   = 8px
3   = 12px
4   = 16px
5   = 20px
6   = 24px
8   = 32px
10  = 40px
12  = 48px
16  = 64px
20  = 80px
24  = 96px
```

### Spacing Examples

```tsx
// Consistent spacing throughout app
<View className="p-4">          {/* 16px padding */}
<View className="m-4">          {/* 16px margin */}
<View className="gap-4">        {/* 16px gap between items */}

// Section spacing
<View className="py-6">         {/* 24px vertical padding */}
<View className="my-8">         {/* 32px vertical margin */}

// Card/Container spacing
<View className="p-6 m-4">      {/* 24px padding, 16px margin */}
```

## Layout Patterns

### Common Layouts

#### Screen Container
```tsx
const ScreenContainer: React.FC = ({ children }) => (
  <View className="flex-1 bg-background">
    {children}
  </View>
);
```

#### Padded Container
```tsx
const PaddedContainer: React.FC = ({ children }) => (
  <View className="px-4 py-6">
    {children}
  </View>
);
```

#### Card Layout
```tsx
const Card: React.FC = ({ children }) => (
  <View className="bg-white rounded-2xl p-4 shadow-md m-2">
    {children}
  </View>
);
```

#### List Item
```tsx
const ListItem: React.FC = ({ title, subtitle }) => (
  <View className="flex-row items-center justify-between py-4 px-4 border-b border-border">
    <View className="flex-1">
      <Text className="text-text-primary font-semibold text-base">
        {title}
      </Text>
      {subtitle && (
        <Text className="text-text-secondary text-sm mt-1">
          {subtitle}
        </Text>
      )}
    </View>
  </View>
);
```

#### Grid Layout
```tsx
const GridItem: React.FC = ({ children }) => (
  <View className="w-1/2 p-2">
    <View className="bg-white rounded-2xl p-4 shadow-sm">
      {children}
    </View>
  </View>
);

// Usage with FlatList
<FlatList
  data={items}
  numColumns={2}
  renderItem={({ item }) => <GridItem>{item}</GridItem>}
/>
```

## Responsive Design

### Screen Sizes

```typescript
// src/utils/responsive.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const isSmallDevice = width < 375;
export const isMediumDevice = width >= 375 && width < 768;
export const isLargeDevice = width >= 768;

export const screenWidth = width;
export const screenHeight = height;
```

### Responsive Spacing

```tsx
import { isSmallDevice } from '@utils/responsive';

const ResponsiveContainer: React.FC = ({ children }) => (
  <View className={`px-${isSmallDevice ? '3' : '4'} py-6`}>
    {children}
  </View>
);
```

### Platform-Specific Styling

```tsx
import { Platform } from 'react-native';

const PlatformButton: React.FC = () => (
  <TouchableOpacity
    className={`
      rounded-xl p-4
      ${Platform.OS === 'ios' ? 'shadow-md' : ''}
    `}
    style={Platform.OS === 'android' ? { elevation: 3 } : {}}
  >
    <Text>Press Me</Text>
  </TouchableOpacity>
);
```

## Style Utilities

### Combining NativeWind with StyleSheet

```tsx
import { StyleSheet } from 'react-native';

// For complex styles or platform-specific code
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

// Usage
<View className="bg-white rounded-2xl p-4" style={styles.shadow}>
  <Text>Card with shadow</Text>
</View>
```

### Dynamic Styles

```tsx
const getDynamicStyles = (isActive: boolean) => ({
  backgroundColor: isActive ? '#53B175' : '#F8F8F8',
});

<View style={getDynamicStyles(isActive)}>
  <Text>Dynamic background</Text>
</View>
```

## Best Practices

### 1. Consistency
Use consistent spacing, colors, and typography throughout the app.

### 2. Reusable Styles
Create reusable style components for common patterns.

### 3. Semantic Naming
Use semantic class names that describe purpose, not appearance.

### 4. Performance
Avoid inline styles when possible; use className for better performance.

### 5. Accessibility
Ensure sufficient color contrast (WCAG AA standard: 4.5:1 for normal text).

### 6. Documentation
Document custom styles and design decisions.

## Style Checklist

- [ ] Colors match Figma design
- [ ] Typography scale is consistent
- [ ] Spacing follows 4px grid
- [ ] Components use design tokens
- [ ] Responsive breakpoints defined
- [ ] Platform-specific styles handled
- [ ] Shadows work on both platforms
- [ ] Dark mode support (if applicable)
- [ ] Accessibility standards met
- [ ] Performance optimized

---

**Consistent styling creates a polished, professional app experience! 🎨**
