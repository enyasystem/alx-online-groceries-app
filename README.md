# Online Groceries App - React Native Implementation

## Project Overview
This project is a React Native implementation of the Online Groceries App design using Expo, TypeScript, and NativeWindCSS. The goal is to create a pixel-perfect, fully functional mobile application that matches the provided Figma design.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Design Implementation](#design-implementation)
- [Development Process](#development-process)
- [Demo & Submission](#demo--submission)
- [Resources](#resources)

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Git
- A code editor (VS Code recommended)
- Expo Go app on your mobile device (for testing)

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/alx-online-groceries-app.git
cd alx-online-groceries-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

### 4. Run on Your Device
- Scan the QR code with Expo Go (Android) or Camera app (iOS)

## Project Structure
```
alx-online-groceries-app/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   ├── products/
│   │   └── cart/
│   ├── screens/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── favorites/
│   │   └── account/
│   ├── navigation/
│   ├── types/
│   ├── constants/
│   └── utils/
├── docs/
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   ├── ASSETS.md
│   ├── COMPONENTS.md
│   ├── STYLING.md
│   └── CHALLENGES.md
├── App.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Design Implementation

### Screens Implemented
- ✅ Splash Screen
- ✅ Onboarding Screen(s)
- ✅ Sign In Screen
- ✅ Sign Up Screen
- ✅ Home/Shop Screen
- ✅ Product Detail Screen
- ✅ Category/Browse Screen
- ✅ Search Screen
- ✅ Cart Screen
- ✅ Favorites Screen
- ✅ Account/Profile Screen

### Key Features
- 🎨 Pixel-perfect UI matching Figma design
- ⚡ Smooth animations and transitions
- 📱 Responsive layouts for all screen sizes
- 🎯 Type-safe code with TypeScript
- 🎭 Custom components following design system
- 🔍 Product search and filtering
- 🛒 Cart management
- ❤️ Favorites functionality
- 👤 User authentication flow

## Development Process

### Phase 1: Setup & Configuration ✅
- Project initialization with Expo and TypeScript
- NativeWind CSS configuration
- Navigation setup
- Asset extraction and organization

### Phase 2: Component Development ✅
- Reusable UI components
- Custom buttons and inputs
- Product cards and lists
- Navigation components

### Phase 3: Screen Implementation ✅
- Authentication screens
- Main app screens
- Cart and checkout flow
- User profile

### Phase 4: Polish & Optimization ✅
- Animations and micro-interactions
- Performance optimization
- Cross-platform testing
- Bug fixes

## Design Specifications

### Color Palette
- **Primary:** `#53B175` (Green)
- **Secondary:** `#F8A44C` (Orange)
- **Background:** `#FFFFFF`
- **Text Primary:** `#181725`
- **Text Secondary:** `#7C7C7C`
- **Border:** `#E2E2E2`
- **Error:** `#F44336`

### Typography
See [STYLING.md](docs/STYLING.md) for complete typography guidelines.

### Spacing System
Using Tailwind's 4px base spacing scale (0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64)

## Demo & Submission

<!-- ### Demo Video -->


### Social Media Posts
- LinkedIn: [https://www.linkedin.com/posts/enyaelvis_reactnative-mobiledevelopment-expo-ugcPost-7425559643680325632-6OPU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrNpEcBXGtkeapZA4HgwV7SZ1BkfxbSiHs]
- Twitter/X: [x.com/enyasystem]
- Instagram: [instagram.com/enyaelvis]

### Submission Links
- GitHub Repository: https://github.com/yourusername/alx-online-groceries-app
- Social Media Post: [Your Post URL]

## Documentation
For detailed documentation, see:
- [Setup Guide](docs/SETUP.md) - Complete setup instructions
- [Architecture](docs/ARCHITECTURE.md) - Project architecture and patterns
- [Components](docs/COMPONENTS.md) - Component documentation
- [Styling Guide](docs/STYLING.md) - Styling conventions
- [Assets Guide](docs/ASSETS.md) - Asset management
- [Challenges & Solutions](docs/CHALLENGES.md) - Development challenges

## Running the Project

### Development
```bash
# Start Expo development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

### Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Building
```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Technologies Used
- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **Styling:** NativeWind CSS (Tailwind for React Native)
- **Navigation:** React Navigation
- **State Management:** React Hooks
- **Icons:** Expo Vector Icons
- **Animations:** React Native Reanimated

## Credits
- **Design:** [Afsar Hossen https://www.figma.com/design/FbIovZFuJAJ5Xo4gyTTBQj/Online-Groceries-App-UI--Community-?node-id=1-2&p=f]
- **Development:** Enya Elvis
- **Challenge:** ALX Software Engineering Program

## License
This project is created for educational purposes as part of the ALX Software Engineering Program.

## Contact
- GitHub: [@enyasystem](https://github.com/enyasystem)
- LinkedIn: [Enya Elvis](https://linkedin.com/in/enyasystem)
- Email: enyaelvis@gmail.com

---

**Made with ❤️ as part of the ALX Software Engineering Program**
