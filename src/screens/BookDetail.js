import React, { useState, useEffect } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../assets/Colors/Colors';

export default function BookDetail({ route, navigation }) {
  const { item } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch("http://10.2.9.19:5127/buku");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setBookData(data);
      } catch (error) {
        console.error("Problem", error);
      }
    };

    fetchBookData();
  }, []);

  const handleBookmark = () => {
    const updatedBookData = bookData.map(book => {
      if (book.ISBN === item.ISBN) {
        return { ...book, isBookmarked: !book.isBookmarked };
      }
      return book;
    });
    setIsBookmarked(!isBookmarked);
  };

  const handleAddToCart = () => {
    navigation.navigate('Cart');
  };

  if (!bookData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 20, left: 10, right: 10, 
        zIndex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 5 }}>
          <FontAwesome name="arrow-left" size={20} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBookmark} style={{ padding: 5 }}>
          <FontAwesome name={isBookmarked ? "bookmark" : "bookmark-o"} size={20} color={isBookmarked ? Colors.yellow : Colors.gray} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Image 
          source={{ uri: item.image.uri }}
          style={{ width: '100%', height: 500, marginBottom: 20, marginTop: 10, borderRadius: 15 }}
        />
        <View style={{ backgroundColor: Colors.white, paddingHorizontal: 20, paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>
          <Text style={{ fontSize: 18, fontStyle: 'italic', marginBottom: 10 }}>{item.author}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Synopsis</Text>
          <Text style={{ marginTop: 5, marginBottom: 10, textAlign: 'justify' }}>{item.summary}</Text>
          <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>${item.price.displayValue}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleAddToCart} style={{ position: 'absolute', bottom: 10, left: 10, right: 10, 
        backgroundColor: Colors.yellow, padding: 5, borderRadius: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: Colors.white }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
