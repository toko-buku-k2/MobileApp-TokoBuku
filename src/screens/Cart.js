import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, AsyncStorage } from 'react-native';
import Colors from '../assets/Colors/Colors';
import { chartData } from '../api';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Fungsi untuk mendapatkan data belanja dari AsyncStorage saat komponen dimuat
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@cartData');
        if (jsonValue !== null) {
          // Parse data dari AsyncStorage jika ada
          const data = JSON.parse(jsonValue);
          setCartData(data);
        }
      } catch (error) {
        console.error('Error reading cart data from AsyncStorage:', error);
      }
    };

    getData();
  }, []);

  // Fungsi untuk menyimpan data belanja ke AsyncStorage setiap kali ada perubahan pada cartData
  useEffect(() => {
    const saveData = async () => {
      try {
        const jsonValue = JSON.stringify(cartData);
        await AsyncStorage.setItem('@cartData', jsonValue);
      } catch (error) {
        console.error('Error saving cart data to AsyncStorage:', error);
      }
    };

    saveData();
  }, [cartData]);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
      <Image
        source={{ uri: item.image.uri }}
        style={{ width: 100, height: 100, marginRight: 20 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 14, color: Colors.gray }}>{item.author}</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>${item.price.displayValue}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Shopping Cart</Text>
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
