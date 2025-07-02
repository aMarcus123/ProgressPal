# ProgressPal
Ever wanted a simple and secure place to store and track your gym progress photos?  
**ProgressPal** lets you easily upload, organize, and review your progress pictures — all in one sleek React Native app.

Built with Expo Router, ProgressPal offers customizable themes that you can select and save, making your experience truly personal. Your theme preferences persist across app launches thanks to AsyncStorage.

> **Note:** This app is currently targeted for **iOS devices only** and works seamlessly with the Expo Go app.


## Features

- Upload progress pictures and data
- Multiple selectable themes
- Themes persist between app restarts using AsyncStorage
- Built with Expo Router for routing
- Progress images stored on app and persists

## Getting Started

These instructions will get you a copy of the project running on your local device using Expo Go.

### Prerequisites

- Node.js installed (https://nodejs.org/)
- Expo CLI installed globally (optional but recommended):

```bash
npm install -g expo-cli
Expo Go app installed on your iOS or Android device (available on App Store / Google Play)
```
# Installation
1. Clone the repository
2. Install dependencies
```bash
npm install
# or
yarn install
```

# Running the App
1 Start the Expo development server

```bash
npx expo start
# or if you have expo-cli installed globally
expo start
```
2. Open the Expo Go app on your device.

3. Scan the QR code displayed in your terminal or browser.


# Troubleshooting
- If the app doesn’t load, make sure your device and development machine are on the same network.
- Restart the Expo server if needed with expo start -c to clear cache.
- If the app takes too long to load, try
  ```bash
  npx expo start --tunnel
  ```
