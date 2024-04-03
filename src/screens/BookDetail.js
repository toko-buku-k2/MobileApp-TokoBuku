import React, { useState, useEffect } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../assets/Colors/Colors';
import { dataBuku } from '../api';
import { bkdtlStyles } from '../components/Style';
import { insertBookmark, removeBookmark, selectBookmark } from '../database/index1';

export default function BookDetail({ route, navigation }) {
  const { item } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [dataBukuAPI, setDataBukuAPI] = useState(null);

  useEffect(() => {
    const fetchDataBuku = async () => {
      try {
        const response = await fetch("http://10.2.15.46:5127/buku/"+item.id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } 
        const data = await response.json();
        console.log(data);
        setDataBukuAPI(data);
      } catch (error) {
        console.error("Problem", error);
      }
    };

    fetchDataBuku();
  }, []);

  useEffect(() => {
    selectBookmark((bookmarkData) => {
      const isBookmarked = bookmarkData.some(book => book.id === item.id);
      setIsBookmarked(isBookmarked);
    });
  }, []);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(item.id);
    } else {
      insertBookmark(item.id, item.cover, item.judul);
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleAddToCart = () => {
    navigation.navigate('Cart');
  };

  if (!dataBukuAPI) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={bkdtlStyles.container}>
      <View style={bkdtlStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={bkdtlStyles.iconButton}>
          <FontAwesome name="arrow-left" size={20} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBookmark} style={bkdtlStyles.iconButton}>
          <FontAwesome name={isBookmarked ? "bookmark" : "bookmark-o"} size={20} color={isBookmarked ? Colors.yellow : Colors.gray} />
        </TouchableOpacity>
      </View>
      <ScrollView vertical style={bkdtlStyles.scrollView}>
        <Image 
          source={{ uri: dataBukuAPI.cover }}
          style={bkdtlStyles.image}
        />
        <View style={bkdtlStyles.detailsContainer}>
          <Text style={bkdtlStyles.title}>{dataBukuAPI.judul}</Text>
          <Text style={bkdtlStyles.price}>Rp {dataBukuAPI.harga}</Text>
          <Text style={bkdtlStyles.synopsisTitle}>Synopsis</Text>
          <Text style={bkdtlStyles.synopsisText}>{dataBukuAPI.sinopsis}</Text>
          <Text style={bkdtlStyles.synopsisTitle}>kategori</Text>
          <Text style={bkdtlStyles.genre}>{dataBukuAPI.kategori.join(', ')}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleAddToCart} style={bkdtlStyles.addButton}>
        <Text style={bkdtlStyles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}