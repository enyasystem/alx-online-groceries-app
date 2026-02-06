# Assets Guide - Online Groceries App

This guide explains how to extract, organize, and use assets from Figma in your React Native app.

## Table of Contents
- [Figma Asset Extraction](#figma-asset-extraction)
- [Asset Organization](#asset-organization)
- [Image Handling](#image-handling)
- [Icon Management](#icon-management)
- [Font Integration](#font-integration)
- [Asset Optimization](#asset-optimization)

## Figma Asset Extraction

### Accessing the Figma Design
1. Open the Online Groceries App Figma file
2. Sign in to Figma (required for exports)
3. Duplicate the file to your workspace (optional, for easier management)

### Exporting Images

#### Method 1: Individual Image Export
1. Select the image/element in Figma
2. Look at the right panel → "Export" section
3. Click "+" to add export setting
4. Choose format and scale:
   - **Format:** PNG (for photos/complex images) or SVG (for icons/simple graphics)
   - **Scale:** 
     - @1x (base resolution)
     - @2x (2x resolution for retina)
     - @3x (3x resolution for high-DPI)
5. Click "Export [element name]"

#### Method 2: Bulk Export
1. Select multiple elements (hold Shift/Cmd)
2. Right panel → Export → Set options
3. Export all at once

#### Recommended Export Settings
- **Product Images:** PNG @2x and @3x
- **Icons:** SVG (vector) or PNG @2x and @3x
- **Illustrations:** PNG @2x and @3x
- **Backgrounds:** PNG @2x (if not solid color)
- **Logos:** SVG preferred

### Exporting Icons

#### From Figma:
1. Select icon
2. Ensure it's a vector (not rasterized)
3. Export as SVG for scalability
4. Alternative: Export as PNG @2x, @3x for different densities

#### Icon Categories to Export:
- Navigation icons (home, cart, favorites, account)
- Action icons (add, remove, search, filter, close)
- Product category icons
- Social media icons (if applicable)
- Status icons (success, error, warning)

### Extracting Colors

#### Method 1: Manually from Figma
1. Select element with color
2. Note the hex/RGB value from right panel
3. Add to `constants/colors.ts`

#### Method 2: Using Figma Styles
1. Check if designer used color styles (right panel)
2. Export color palette
3. Copy values to your constants

### Extracting Typography

1. Select text element
2. Note the following from right panel:
   - Font family
   - Font weight
   - Font size
   - Line height
   - Letter spacing
3. Document in `constants/theme.ts`

### Extracting Spacing & Layout
1. Use Figma's measurement tool (hold Option/Alt)
2. Note padding, margins, gaps
3. Round to nearest 4px increment (for Tailwind)
4. Document common spacing values

## Asset Organization

### Directory Structure
```
src/assets/
├── fonts/
│   ├── Gilroy-Regular.ttf
│   ├── Gilroy-Medium.ttf
│   ├── Gilroy-SemiBold.ttf
│   └── Gilroy-Bold.ttf
├── icons/
│   ├── navigation/
│   │   ├── home.svg
│   │   ├── shop.svg
│   │   ├── cart.svg
│   │   ├── favorites.svg
│   │   └── account.svg
│   ├── actions/
│   │   ├── add.svg
│   │   ├── remove.svg
│   │   ├── search.svg
│   │   ├── filter.svg
│   │   └── close.svg
│   └── categories/
│       ├── fruits.svg
│       ├── vegetables.svg
│       ├── dairy.svg
│       └── meat.svg
├── images/
│   ├── splash/
│   │   └── logo.png
│   ├── onboarding/
│   │   ├── onboarding-1.png
│   │   ├── onboarding-2.png
│   │   └── onboarding-3.png
│   ├── products/
│   │   ├── sample-product-1.png
│   │   ├── sample-product-2.png
│   │   └── ...
│   ├── banners/
│   │   └── home-banner.png
│   └── placeholders/
│       ├── user-avatar.png
│       └── product-placeholder.png
└── app-icons/
    ├── icon.png (1024x1024)
    ├── adaptive-icon.png (1024x1024)
    ├── splash.png (1284x2778 or similar)
    └── favicon.png (48x48)
```

### File Naming Conventions
- Use lowercase with hyphens: `product-card-image.png`
- Be descriptive: `home-banner-vegetables.png` not `banner1.png`
- Include size if multiple versions: `logo-small.png`, `logo-large.png`
- Use prefixes for organization: `icon-home.svg`, `img-onboarding-1.png`

## Image Handling

### Using Images in React Native

#### Local Images
```tsx
import React from 'react';
import { Image } from 'react-native';

// Method 1: Direct import
import logo from '@assets/images/logo.png';

const Header = () => (
  <Image source={logo} className="w-20 h-20" />
);

// Method 2: Require
const Splash = () => (
  <Image 
    source={require('@assets/images/splash/logo.png')} 
    className="w-32 h-32"
  />
);
```

#### Remote Images
```tsx
const ProductCard = ({ imageUrl }) => (
  <Image 
    source={{ uri: imageUrl }}
    className="w-full h-40"
    resizeMode="cover"
  />
);
```

#### Image with Fallback
```tsx
import React, { useState } from 'react';
import { Image } from 'react-native';

const ProductImage = ({ uri }) => {
  const [error, setError] = useState(false);
  
  return (
    <Image 
      source={error 
        ? require('@assets/images/placeholders/product-placeholder.png')
        : { uri }
      }
      onError={() => setError(true)}
      className="w-full h-40"
    />
  );
};
```

### Image Optimization Best Practices

1. **Use appropriate formats:**
   - PNG: Images with transparency, logos
   - JPEG: Photos, complex images without transparency
   - SVG: Icons, simple graphics (convert to React components)

2. **Optimize file sizes:**
   - Compress PNGs with tools like TinyPNG
   - Set JPEG quality to 80-85%
   - Remove metadata

3. **Provide multiple densities:**
   ```
   assets/images/
   ├── logo.png       (@1x - 100x100)
   ├── logo@2x.png    (@2x - 200x200)
   └── logo@3x.png    (@3x - 300x300)
   ```

4. **Use appropriate dimensions:**
   - Don't use oversized images
   - Scale images to maximum display size needed
   - Consider screen densities (2x, 3x)

## Icon Management

### Using SVG Icons

#### Method 1: React Native SVG
```bash
npm install react-native-svg
```

```tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ size = 24, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
      fill={color}
    />
  </Svg>
);

export default HomeIcon;
```

#### Method 2: @expo/vector-icons
```tsx
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const TabIcon = ({ focused }) => (
  <Ionicons 
    name={focused ? 'home' : 'home-outline'} 
    size={24} 
    color={focused ? '#53B175' : '#7C7C7C'}
  />
);
```

#### Method 3: Convert SVG to React Component
Use tool: https://react-svgr.com/playground/

```tsx
// Before (SVG file)
<svg>...</svg>

// After (React component)
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CartIcon = (props) => (
  <Svg width={24} height={24} {...props}>
    <Path d="..." fill="currentColor" />
  </Svg>
)

export default CartIcon
```

### Icon Component Wrapper
```tsx
// components/common/Icon.tsx
import React from 'react';
import { View } from 'react-native';
import HomeIcon from '@assets/icons/navigation/home';
import CartIcon from '@assets/icons/navigation/cart';
// ... import other icons

interface IconProps {
  name: 'home' | 'cart' | 'favorites' | 'account';
  size?: number;
  color?: string;
}

const iconMap = {
  home: HomeIcon,
  cart: CartIcon,
  favorites: FavoritesIcon,
  account: AccountIcon,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
  const IconComponent = iconMap[name];
  return <IconComponent width={size} height={size} color={color} />;
};

export default Icon;
```

## Font Integration

### Adding Custom Fonts

#### Step 1: Download Fonts from Figma
1. Note font family used in design (e.g., "Gilroy", "Poppins")
2. Download font files (.ttf or .otf)
3. Get necessary weights: Regular (400), Medium (500), SemiBold (600), Bold (700)

#### Step 2: Add Fonts to Project
```bash
# Create fonts directory
mkdir -p src/assets/fonts

# Add font files
# - Gilroy-Regular.ttf
# - Gilroy-Medium.ttf
# - Gilroy-SemiBold.ttf
# - Gilroy-Bold.ttf
```

#### Step 3: Load Fonts with expo-font
```tsx
// App.tsx
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Gilroy-Regular': require('./src/assets/fonts/Gilroy-Regular.ttf'),
          'Gilroy-Medium': require('./src/assets/fonts/Gilroy-Medium.ttf'),
          'Gilroy-SemiBold': require('./src/assets/fonts/Gilroy-SemiBold.ttf'),
          'Gilroy-Bold': require('./src/assets/fonts/Gilroy-Bold.ttf'),
        });
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
```

#### Step 4: Configure Fonts in Tailwind
```javascript
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

#### Step 5: Use Fonts
```tsx
// With NativeWind
<Text className="font-regular text-base">Regular Text</Text>
<Text className="font-medium text-lg">Medium Text</Text>
<Text className="font-semibold text-xl">SemiBold Text</Text>
<Text className="font-bold text-2xl">Bold Text</Text>

// With StyleSheet
<Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 24 }}>
  Bold Heading
</Text>
```

## Asset Optimization

### Image Optimization Tools
- **TinyPNG:** https://tinypng.com/ (PNG/JPEG compression)
- **ImageOptim:** https://imageoptim.com/ (macOS)
- **Squoosh:** https://squoosh.app/ (web-based)

### SVG Optimization
- **SVGO:** Command-line SVG optimizer
```bash
npm install -g svgo
svgo input.svg -o output.svg
```

### Automated Optimization Script
```bash
# package.json
{
  "scripts": {
    "optimize:images": "imagemin src/assets/images/**/*.{jpg,png} --out-dir=src/assets/images/optimized",
    "optimize:svg": "svgo -f src/assets/icons -o src/assets/icons/optimized"
  }
}
```

### Best Practices
1. **Keep assets small:** Aim for <100KB per image when possible
2. **Use lazy loading:** Load images as needed
3. **Cache images:** Use caching for remote images
4. **Provide fallbacks:** Always have placeholder images
5. **Test on devices:** Check asset quality on actual devices
6. **Use CDN for production:** Host large assets externally
7. **Monitor bundle size:** Keep track of app size impact

## Asset Checklist

### Before Development Starts
- [ ] All product images extracted
- [ ] All icons extracted and organized
- [ ] Custom fonts downloaded and added
- [ ] App icon and splash screen created
- [ ] Color palette documented
- [ ] Typography scale documented
- [ ] Images optimized for mobile
- [ ] Multiple densities provided (@2x, @3x)

### During Development
- [ ] Images display correctly
- [ ] Icons render properly
- [ ] Fonts load without issues
- [ ] Assets are properly cached
- [ ] Bundle size is acceptable
- [ ] App launches quickly

### Production Checklist
- [ ] All assets optimized
- [ ] No unused assets in bundle
- [ ] Image formats appropriate
- [ ] High-quality assets for all screens
- [ ] App icon meets platform requirements
- [ ] Splash screen configured correctly

---

**Properly managed assets ensure a polished, professional app appearance! 🎨**
