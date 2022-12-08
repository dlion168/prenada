import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http://192.168.0.19:19006' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
