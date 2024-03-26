import React from 'react';
import { View, Text, Platform } from 'react-native';

export default function CustomStatusBar() {
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <View style={{ height: 20, backgroundColor: 'blue' }}>
      {/* Isi StatusBar sesuai kebutuhan */}
    </View>
  );
}