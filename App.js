import React, { useEffect } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { StyleSheet } from 'react-native';
import { createTable } from './src/database/index1';

export default function App() {
  useEffect(() => {
    createTable();
  }, []);
  return (
      <AppNavigation />
  );
}
