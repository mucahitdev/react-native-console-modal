# react-native-console-modal

A React Native debug tool that displays console logs and network requests directly within your app. Perfect for debugging on physical devices without needing to connect to a computer.

## Features

- 📱 Real-time console log viewing within your app
- 🎨 Color-coded log levels (log, warn, error)
- 🔄 Auto-scrolling to latest logs
- 🧹 One-tap log clearing
- 📍 Draggable floating button
- 🪶 Lightweight and easy to integrate

## Installation

```sh
# Using npm
npm install react-native-console-modal

# Using yarn
yarn add react-native-console-modal
```

## Usage

### Basic Setup

```jsx
import { LogViewer, overrideConsole } from 'react-native-console-modal';

// Override console methods to capture logs
overrideConsole();

function App() {
  return (
    <View style={styles.container}>
      {/* Your app content */}
      <LogViewer />
    </View>
  );
}
```

### Features Demonstrated in Example

1. **Console Logging**:

   - Regular console.log messages
   - State updates logging
   - API call results

2. **Interactive Testing**:

   - Button to trigger console.log
   - Counter to demonstrate state changes
   - API fetch to show network requests

3. **Styling**:
   - Centered container layout
   - Clean button arrangement
   - Professional looking UI

## Why react-native-console-modal?

- 🔍 Debug on physical devices without computer connection
- 📱 Perfect for QA teams and beta testers
- 🚀 Zero configuration required
- 🎨 Clean and intuitive interface
- 🪶 Minimal impact on app performance

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
