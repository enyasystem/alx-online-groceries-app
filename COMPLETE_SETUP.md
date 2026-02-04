# Complete Setup Guide - Online Groceries App with Expo Router

## 🎯 What We're Building

A modern React Native grocery app using:
- **Expo** - React Native framework
- **Expo Router** - File-based routing (modern approach)
- **TypeScript** - Type safety
- **NativeWind** - Tailwind CSS for React Native

## 📋 Prerequisites

- Node.js v18+ installed
- npm or yarn
- Git installed
- VS Code (recommended)
- Expo Go app on your phone (for testing)

## 🚀 Complete Setup Process

### Step 1: Create New Expo Project

```powershell
# Create new Expo project with TypeScript and Expo Router
npx create-expo-app@latest alx-online-groceries-app --template tabs

# Navigate into project
cd alx-online-groceries-app

# Verify it works
npm start
```

Press `Ctrl+C` to stop the dev server once you verify it works.

### Step 2: Install Required Dependencies

```powershell
# Install Expo Router (if not already included)
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# Install NativeWind
npm install nativewind
npm install --save-dev tailwindcss@3.3.2

# Install navigation dependencies
npm install @react-navigation/native @react-navigation/stack

# Install vector icons
npx expo install @expo/vector-icons

# Install AsyncStorage for data persistence
npx expo install @react-native-async-storage/async-storage
```

### Step 3: Initialize Tailwind CSS

```powershell
# Initialize Tailwind
npx tailwindcss init
```

### Step 4: Project Structure Setup

Create the following directory structure:

```powershell
# Create src directory structure
New-Item -ItemType Directory -Force -Path src/components/common
New-Item -ItemType Directory -Force -Path src/components/products
New-Item -ItemType Directory -Force -Path src/components/cart
New-Item -ItemType Directory -Force -Path src/constants
New-Item -ItemType Directory -Force -Path src/hooks
New-Item -ItemType Directory -Force -Path src/types
New-Item -ItemType Directory -Force -Path src/utils
New-Item -ItemType Directory -Force -Path src/contexts
New-Item -ItemType Directory -Force -Path src/assets/fonts
New-Item -ItemType Directory -Force -Path src/assets/icons
New-Item -ItemType Directory -Force -Path src/assets/images

# Create docs directory
New-Item -ItemType Directory -Force -Path docs
```

### Step 5: Clean Up Default Files

```powershell
# Remove default app directory (we'll create our own)
Remove-Item -Recurse -Force app

# Create new app directory
New-Item -ItemType Directory -Force -Path app
New-Item -ItemType Directory -Force -Path "app/(tabs)"
New-Item -ItemType Directory -Force -Path app/product
New-Item -ItemType Directory -Force -Path app/category
```

### Step 6: Configure Files

Now you'll create/update the following configuration files. I'll provide each as an artifact below.

**Files to create/update:**
1. `tailwind.config.js`
2. `babel.config.js`
3. `app.json`
4. `tsconfig.json`
5. `.gitignore`

### Step 7: Create App Files

Create all the screen and component files (provided as artifacts below).

### Step 8: Start Development

```powershell
# Clear cache and start
npm start -- --clear

# Or just start normally
npm start
```

## 📁 Final Project Structure

```
alx-online-groceries-app/
├── app/                              # Expo Router (file-based routing)
│   ├── _layout.tsx                   # Root layout
│   ├── index.tsx                     # Splash/Entry screen
│   ├── onboarding.tsx                # Onboarding
│   ├── signin.tsx                    # Sign in
│   ├── signup.tsx                    # Sign up
│   ├── modal.tsx                     # Modal screen
│   ├── (tabs)/                       # Tab navigation group
│   │   ├── _layout.tsx               # Tab layout
│   │   ├── index.tsx                 # Home tab
│   │   ├── shop.tsx                  # Shop tab
│   │   ├── cart.tsx                  # Cart tab
│   │   ├── favorites.tsx             # Favorites tab
│   │   └── account.tsx               # Account tab
│   ├── product/
│   │   └── [id].tsx                  # Product detail (dynamic)
│   └── category/
│       └── [id].tsx                  # Category products (dynamic)
├── src/
│   ├── components/
│   │   ├── common/                   # Reusable UI components
│   │   ├── products/                 # Product components
│   │   └── cart/                     # Cart components
│   ├── constants/
│   │   ├── colors.ts                 # Color palette
│   │   ├── theme.ts                  # Theme config
│   │   └── index.ts                  # Barrel export
│   ├── hooks/
│   │   ├── useCart.ts                # Cart state management
│   │   ├── useFavorites.ts           # Favorites management
│   │   ├── useDebounce.ts            # Search debouncing
│   │   └── index.ts                  # Barrel export
│   ├── types/
│   │   ├── navigation.ts             # Navigation types
│   │   ├── product.ts                # Product types
│   │   ├── cart.ts                   # Cart types
│   │   ├── user.ts                   # User types
│   │   └── index.ts                  # Barrel export
│   ├── utils/
│   │   ├── helpers.ts                # Helper functions
│   │   ├── validation.ts             # Form validation
│   │   ├── formatters.ts             # Data formatters
│   │   └── index.ts                  # Barrel export
│   ├── contexts/
│   │   ├── CartContext.tsx           # Cart context provider
│   │   └── AuthContext.tsx           # Auth context provider
│   └── assets/
│       ├── fonts/                    # Custom fonts (from Figma)
│       ├── icons/                    # Icons (from Figma)
│       └── images/                   # Images (from Figma)
├── docs/                             # Documentation
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   └── ...
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Color Palette (from Figma)

```
Primary: #53B175 (Green)
Secondary: #F8A44C (Orange)
Background: #FFFFFF
Text Primary: #181725
Text Secondary: #7C7C7C
Border: #E2E2E2
Error: #F44336
```

## 📦 All Files Provided as Artifacts Below

Each file is provided as a separate artifact that you can copy directly into your project.

## 🧪 Testing Your Setup

After creating all files:

```powershell
# Start the app
npm start

# Test on your phone
# Scan QR code with Expo Go app

# Test on web (optional)
npm run web
```

## ✅ Verification Checklist

- [ ] Project created with `create-expo-app`
- [ ] All dependencies installed
- [ ] Tailwind CSS configured
- [ ] Directory structure created
- [ ] All config files updated
- [ ] All app files created
- [ ] All src files created
- [ ] App starts without errors
- [ ] Can navigate between screens

## 🎯 Next Steps After Setup

1. Extract assets from Figma (images, icons, fonts)
2. Build reusable components (Button, Input, ProductCard, etc.)
3. Implement screens with real data
4. Add animations and polish
5. Create demo video
6. Submit project

## 📚 Documentation

Save all documentation files to the `docs/` directory for reference.

---

**Ready to build! All file artifacts are provided below. Copy them into your project.**
