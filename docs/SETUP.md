# Setup Guide - Online Groceries App

This guide will walk you through setting up the Online Groceries App from scratch.

## Table of Contents
- [System Requirements](#system-requirements)
- [Initial Setup](#initial-setup)
- [Project Configuration](#project-configuration)
- [Development Environment](#development-environment)
- [Troubleshooting](#troubleshooting)

## System Requirements

### Minimum Requirements
- **Node.js:** v18.0.0 or higher
- **npm:** v8.0.0 or higher (or yarn v1.22.0+)
- **RAM:** 8GB minimum, 16GB recommended
- **Storage:** 10GB free space
- **OS:** macOS, Windows 10/11, or Linux

### Recommended Tools
- **Code Editor:** VS Code with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - React Native Tools
- **Version Control:** Git 2.x or higher
- **Terminal:** iTerm2 (macOS), PowerShell (Windows), or any modern terminal

## Initial Setup

### Step 1: Install Node.js
```bash
# Check if Node.js is installed
node --version

# If not installed, download from https://nodejs.org/
# Or use a version manager like nvm
nvm install 18
nvm use 18
```

### Step 2: Install Expo CLI
```bash
# Install Expo CLI globally
npm install -g expo-cli

# Verify installation
expo --version
```

### Step 3: Install Git
```bash
# Check if Git is installed
git --version

# If not installed, download from https://git-scm.com/
```

### Step 4: Create New Expo Project
```bash
# Create new Expo project with TypeScript template
npx create-expo-app alx-online-groceries-app --template expo-template-blank-typescript

# Navigate to project directory
cd alx-online-groceries-app
```

## Project Configuration

### Step 1: Install Core Dependencies

#### Navigation Dependencies
```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler
npm install react-native-reanimated
```

#### NativeWind CSS
```bash
npm install nativewind
npm install --save-dev tailwindcss@3.3.2

# Initialize Tailwind
npx tailwindcss init
```

#### UI & Icons
```bash
npm install @expo/vector-icons
npm install expo-linear-gradient
npm install expo-font
npm install expo-splash-screen
```

### Step 2: Configure Tailwind CSS

Create or update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#53B175',
          light: '#6CC788',
          dark: '#429D61',
        },
        secondary: {
          DEFAULT: '#F8A44C',
          light: '#F9B668',
          dark: '#E6933A',
        },
        background: '#FFFFFF',
        text: {
          primary: '#181725',
          secondary: '#7C7C7C',
          light: '#B3B3B3',
        },
        border: '#E2E2E2',
        error: '#F44336',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      fontFamily: {
        // Add custom fonts here after extracting from Figma
        regular: ['CustomFont-Regular'],
        medium: ['CustomFont-Medium'],
        semibold: ['CustomFont-SemiBold'],
        bold: ['CustomFont-Bold'],
      },
      spacing: {
        // Custom spacing if needed
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
```

### Step 3: Configure Babel

Update `babel.config.js`:
```javascript
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
```

### Step 4: Configure TypeScript

Update `tsconfig.json`:
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@screens/*": ["src/screens/*"],
      "@navigation/*": ["src/navigation/*"],
      "@assets/*": ["src/assets/*"],
      "@types/*": ["src/types/*"],
      "@constants/*": ["src/constants/*"],
      "@utils/*": ["src/utils/*"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
```

### Step 5: Create Project Structure
```bash
# Create directory structure
mkdir -p src/{assets/{fonts,icons,images},components/{common,products,cart},screens/{auth,home,product,cart,favorites,account},navigation,types,constants,utils}

# Create docs directory
mkdir docs
```

### Step 6: Configure App.json

Update `app.json`:
```json
{
  "expo": {
    "name": "Online Groceries",
    "slug": "alx-online-groceries-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./src/assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#53B175"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.alx.onlinegroceries"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/adaptive-icon.png",
        "backgroundColor": "#53B175"
      },
      "package": "com.alx.onlinegroceries"
    },
    "web": {
      "favicon": "./src/assets/favicon.png"
    }
  }
}
```

### Step 7: Setup Git Repository
```bash
# Initialize Git repository
git init

# Create .gitignore
cat > .gitignore << EOL
node_modules/
.expo/
.expo-shared/
dist/
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/
.env
.env.local
.DS_Store
EOL

# Initial commit
git add .
git commit -m "Initial commit: Project setup"

# Add remote and push
git remote add origin https://github.com/yourusername/alx-online-groceries-app.git
git branch -M main
git push -u origin main
```

## Development Environment

### Install Mobile Development Tools

#### For iOS Development (macOS only)
1. Install Xcode from the App Store
2. Install Xcode Command Line Tools:
```bash
xcode-select --install
```
3. Install CocoaPods:
```bash
sudo gem install cocoapods
```

#### For Android Development
1. Install Android Studio from https://developer.android.com/studio
2. Configure Android SDK and emulator
3. Set environment variables:

**macOS/Linux:**
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**Windows:**
```
ANDROID_HOME = C:\Users\YourUsername\AppData\Local\Android\Sdk
```

### Install Expo Go on Mobile Device
- **iOS:** Download from App Store
- **Android:** Download from Google Play Store

### VS Code Extensions
Install recommended extensions:
```json
{
  "recommendations": [
    "dsznajder.es7-react-js-snippets",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "msjsdiag.vscode-react-native",
    "styled-components.vscode-styled-components"
  ]
}
```

## Running the Project

### Development Server
```bash
# Start Expo development server
npm start

# Or with specific options
npm start -- --clear  # Clear cache
npm start -- --tunnel  # Use tunnel connection
```

### Platform-Specific Commands
```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

### Testing on Physical Device
1. Ensure your device and computer are on the same network
2. Open Expo Go app
3. Scan the QR code from the terminal
4. App will load on your device

## Troubleshooting

### Common Issues

#### Issue: Metro Bundler Port Conflict
```bash
# Kill process on port 19000
npx kill-port 19000

# Or start on different port
expo start --port 19001
```

#### Issue: Cache Problems
```bash
# Clear Expo cache
expo start -c

# Clear npm cache
npm cache clean --force

# Clear watchman cache (macOS)
watchman watch-del-all
```

#### Issue: Node Modules Issues
```bash
# Remove and reinstall
rm -rf node_modules
npm install

# Or
rm -rf node_modules package-lock.json
npm install
```

#### Issue: iOS Simulator Not Starting
```bash
# Reset iOS Simulator
xcrun simctl erase all

# Or open simulator manually
open -a Simulator
```

#### Issue: Android Emulator Not Found
```bash
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_5_API_31
```

#### Issue: TypeScript Errors
```bash
# Restart TypeScript server in VS Code
# Command Palette (Cmd/Ctrl + Shift + P)
# > TypeScript: Restart TS Server
```

### Getting Help
- Expo Documentation: https://docs.expo.dev/
- React Native Documentation: https://reactnative.dev/
- NativeWind Documentation: https://www.nativewind.dev/
- Stack Overflow: Tag questions with `expo`, `react-native`, `nativewind`

## Next Steps
After completing setup:
1. Read [ARCHITECTURE.md](ARCHITECTURE.md) for project structure
2. Read [ASSETS.md](ASSETS.md) for asset extraction
3. Read [COMPONENTS.md](COMPONENTS.md) for component development
4. Read [STYLING.md](STYLING.md) for styling guidelines

---

**Setup Complete! Ready to start building! 🚀**
