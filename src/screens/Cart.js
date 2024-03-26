import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Colors from '../assets/Colors/Colors';
import { cartData } from '../constants'; 

export default function Cart() {
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
        keyExtractor={(item) => item.ISBN.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
