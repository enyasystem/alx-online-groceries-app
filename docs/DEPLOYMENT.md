# Deployment Guide - Online Groceries App

This guide covers how to deploy your Expo React Native app for demo and production purposes.

## Table of Contents

- [Quick Start (Expo Go)](#quick-start-expo-go)
- [Expo Preview Deployment](#expo-preview-deployment)
- [Local Development Server](#local-development-server)
- [EAS Build (Production Builds)](#eas-build-production-builds)
- [TestFlight (iOS)](#testflight-ios)
- [Google Play Beta (Android)](#google-play-beta-android)
- [Demo via Expo Go QR Code](#demo-via-expo-go-qr-code)
- [Sharing for Demo](#sharing-for-demo)

---

## Quick Start (Expo Go)

The fastest way to demo your app is using the **Expo Go** app.

### Prerequisites

- Node.js v18+ installed
- Project dependencies installed: `npm install`

### Steps

1. **Start the development server:**

   ```bash
   npx expo start
   ```

2. **Choose your platform:**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for web preview
   - Scan QR code with phone to open in Expo Go

3. **Share with others:**
   - Install **Expo Go** app on phone (iOS App Store or Google Play)
   - Have them scan the QR code shown in terminal
   - They can immediately see and interact with the app

### Pros

- ✅ Instant testing
- ✅ No build required
- ✅ Works on any physical device with Expo Go
- ✅ Easy to share via QR code

### Cons

- ❌ Requires Expo Go app installed
- ❌ Limited native module support
- ❌ Not suitable for app store submission

---

## Expo Preview Deployment

Share a live preview link that can be accessed from any browser.

### Steps

1. **Ensure you're logged into Expo:**

   ```bash
   expo login
   # or
   expo login --username your-username
   ```

2. **Publish a preview:**

   ```bash
   npx expo start --no-dev --minify
   ```

3. **Get shareable link:**
   The terminal will display a URL like: `https://exp.host/@username/project`

4. **Share the link:**
   - Send the URL to reviewers/demo audience
   - They can open it on their phone (with Expo Go app) or web
   - Works across devices

### Pros

- ✅ Cloud-hosted preview
- ✅ Shareable URL
- ✅ No local server required
- ✅ Works on multiple devices

### Cons

- ❌ Requires Expo account
- ❌ May have performance overhead
- ❌ Web preview limited compared to native app

---

## Local Development Server

Run the app locally during demo on a single machine.

### Steps

1. **Start development server:**

   ```bash
   npx expo start
   ```

2. **On same machine:**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for web (http://localhost:19000)

3. **Reload on changes:**
   - Press `r` to reload
   - Press `o` to open in browser
   - Hot reload enabled automatically

### Pros

- ✅ Full control
- ✅ No internet required
- ✅ Fastest feedback loop
- ✅ Good for presentations on single machine

### Cons

- ❌ Requires development machine
- ❌ Limited to one device at a time (with simulator)

---

## EAS Build (Production Builds)

Create optimized, production-ready builds.

### Prerequisites

1. **Install EAS CLI:**

   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo:**

   ```bash
   eas login
   ```

3. **Configure project (first time only):**
   ```bash
   eas build:configure
   ```

### iOS Build

1. **Start build:**

   ```bash
   eas build --platform ios
   ```

2. **Choose build type:**
   - Select "Development" for testing
   - Select "Preview" for TestFlight/App Store review
   - Select "Production" for App Store submission

3. **Wait for build (5-15 minutes):**
   - EAS builds in the cloud
   - You'll get download link when ready
   - Can test on physical device

### Android Build

1. **Start build:**

   ```bash
   eas build --platform android
   ```

2. **Choose build type:**
   - "Development" or "Preview" (.apk for direct install)
   - "Production" (.aab for Play Store)

3. **Install on device:**
   ```bash
   adb install path/to/build.apk
   ```

### Pros

- ✅ Production-optimized
- ✅ Can test on real devices
- ✅ Suitable for store submission
- ✅ Cloud build handles platform-specific configs

### Cons

- ❌ Requires Expo account
- ❌ Build time (5-15 minutes)
- ❌ Limited free builds per month
- ❌ Slower than local testing

---

## TestFlight (iOS)

Distribute your iOS app to beta testers via Apple's TestFlight.

### Prerequisites

- Apple Developer Account ($99/year)
- EAS CLI installed and configured

### Steps

1. **Create App Store app record:**
   - Go to [App Store Connect](https://appstoreconnect.apple.com)
   - Click "My Apps"
   - Create new app: "Online Groceries"
   - Bundle ID: `com.enyasystem.alxonlinegroceriesapp`

2. **Build for TestFlight:**

   ```bash
   eas build --platform ios
   # Select "Preview" when prompted
   ```

3. **Submit to TestFlight:**
   - Go to App Store Connect
   - Select your app
   - Go to TestFlight → Internal Testing
   - Add your Apple ID as internal tester
   - Build auto-submits for review (usually 1-2 hours)

4. **Invite testers:**
   - Add testers' Apple IDs or email addresses
   - Send TestFlight invite link
   - Testers can install via TestFlight app

5. **Share demo version:**
   - Add reviewer email to internal testers
   - They receive invite and can test immediately

### Pros

- ✅ Real device testing
- ✅ Official Apple testing platform
- ✅ Easy invite/revoke
- ✅ Beta feedback integration

### Cons

- ❌ Requires Apple Developer Account
- ❌ Review process (1-2 hours)
- ❌ Limited to iOS

---

## Google Play Beta (Android)

Distribute Android app to beta testers via Google Play.

### Prerequisites

- Google Play Developer Account ($25 one-time)
- EAS CLI installed and configured

### Steps

1. **Create Play Store app record:**
   - Go to [Google Play Console](https://play.google.com/console)
   - Create new app: "Online Groceries"
   - Package name: `com.enyasystem.alxonlinegroceriesapp`

2. **Build for Play Store:**

   ```bash
   eas build --platform android
   # Select "Production" when prompted
   # This creates .aab (Android App Bundle)
   ```

3. **Upload to Play Console:**
   - Go to your app in Play Console
   - Select "Testing" → "Internal testing"
   - Upload the .aab file

4. **Invite testers:**
   - Create internal testing track
   - Add tester Google accounts
   - Send test link via email

5. **Share demo version:**
   - Add reviewer to internal testers
   - They get access to install immediately via Google Play

### Pros

- ✅ Real device testing
- ✅ Uses official Play Store infrastructure
- ✅ Can escalate to public beta later
- ✅ Automated testing reports

### Cons

- ❌ Requires Google Play Developer Account
- ❌ Upload takes time
- ❌ Limited to Android

---

## Demo via Expo Go QR Code

Best option for live demo presentations.

### Setup

1. **Install Expo Go on demo device:**
   - iOS: App Store → Search "Expo Go" → Install
   - Android: Google Play → Search "Expo Go" → Install

2. **On your development machine, start server:**

   ```bash
   npx expo start
   ```

3. **Show QR code to audience:**
   - Terminal displays QR code
   - Attendees scan with their phones
   - App opens immediately in Expo Go

### Live Demo Tips

- ✅ Have backup internet connection
- ✅ Use data cable for stability if possible
- ✅ Test beforehand on the demo device
- ✅ Have QR code visible on projector
- ✅ Keep demo phone plugged in

### Sharing Demo Link

- Press `s` in terminal to get shareable link
- Send via email/Slack to reviewers
- They scan or visit link to see your app
- Works for 24 hours

---

## Sharing for Demo

### Option 1: QR Code (Recommended)

```bash
npx expo start
# Scan QR code with Expo Go app
# Works instantly
```

**Best for:** Live presentations, quick reviews

### Option 2: Shareable Link

```bash
npx expo start
# Press 's' in terminal
# Share generated URL
# Valid for 24 hours
```

**Best for:** Remote reviews, email submissions

### Option 3: Production Build

```bash
eas build --platform [ios|android]
# Download .apk or .ipa
# Install directly on device
# Closest to app store version
```

**Best for:** Final submission, production demo

### Option 4: Web Preview

```bash
npx expo start --web
# Opens at http://localhost:19000
# Share via ngrok for remote access
```

**Best for:** Quick web previews, basic testing

---

## Troubleshooting

### QR Code Issues

```bash
# If QR code won't scan:
# 1. Clear Expo app cache
# 2. Restart both devices
# 3. Check network connectivity
# 4. Use tunnel connection:
npx expo start --tunnel
```

### Build Failures

```bash
# Clear EAS cache:
eas build --clear-cache

# Clear local build:
rm -rf node_modules
npm install

# Check build logs:
eas build:list
```

### Expo Go Not Opening

```bash
# Reinstall Expo Go app
# Check iOS/Android app permissions
# Try installing from TestFlight/Play Beta instead
```

### Internet Connectivity

```bash
# If development machine isn't accessible:
# Use tunnel mode:
npx expo start --tunnel

# Or use preview build:
eas build --platform [ios|android] --profile preview
```

---

## Recommended Deployment Flow

### For Quick Demo (5 minutes)

1. `npx expo start`
2. Show QR code to audience
3. They scan with Expo Go

### For Formal Demo Submission

1. `eas build --platform ios --profile preview`
2. Submit to TestFlight
3. Share TestFlight invite link
4. Reviewers test on real iOS device

### For App Store Submission

1. `eas build --platform ios --profile production`
2. Submit to App Store for review
3. Wait for Apple approval
4. Release in App Store

### For Multiple Testers

1. Use TestFlight (iOS) + Google Play Beta (Android)
2. Send invites to reviewers
3. Collect feedback via in-app feedback or email

---

## Demo Checklist

Before sharing your demo:

- [ ] Run `npm install` to ensure all dependencies
- [ ] Test on iOS Simulator: `npx expo start` → Press `i`
- [ ] Test on Android Emulator: `npx expo start` → Press `a`
- [ ] Clear cache if changes don't appear: `npx expo start --clear`
- [ ] Check console for errors: `npx expo start` → Look at terminal output
- [ ] Test all main features:
  - [ ] Login/Signup
  - [ ] Browse categories
  - [ ] View product details
  - [ ] Add to cart
  - [ ] Checkout flow
  - [ ] Favorites
  - [ ] Search
  - [ ] Account/Logout
- [ ] Test on actual device via Expo Go
- [ ] Verify no console errors or warnings
- [ ] Check network connectivity before live demo

---

## Final Notes

- **For fastest demo:** Use `npx expo start` + QR code
- **For safest submission:** Use `eas build` with production profile
- **For widest testing:** Use TestFlight + Google Play Beta
- **For live presentation:** Use development server with Expo Go on projector

Choose the method based on your timeline and audience!
