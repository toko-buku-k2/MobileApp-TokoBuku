import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Colors from '../assets/Colors/Colors';
import { cartStyles } from '../components/Style';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  // useEffect untuk memuat data dari AsyncStorage saat komponen dimuat
  useEffect(() => {
    // ... kode useEffect yang sudah ada
  }, []);

  // useEffect untuk menyimpan data ke AsyncStorage saat ada perubahan pada cartData
  useEffect(() => {
    // ... kode useEffect yang sudah ada
  }, [cartData]);

  const renderItem = ({ item }) => (
    <View style={cartStyles.itemContainer}>
      <Image
        source={{ uri: item.image.uri }}
        style={cartStyles.itemImage}
      />
      <View style={cartStyles.itemDetailsContainer}>
        <Text style={cartStyles.itemTitle}>{item.title}</Text>
        <Text style={cartStyles.itemAuthor}>{item.author}</Text>
        <Text style={cartStyles.itemPrice}>${item.price.displayValue}</Text>
      </View>
    </View>
  );

  return (
    <View style={cartStyles.container}>
      <Text style={cartStyles.title}>Shopping Cart</Text>
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
