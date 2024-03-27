import React, { useState, useEffect } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../assets/Colors/Colors';
import { dataBuku } from '../api';

export default function BookDetail({ route, navigation }) {
  const { item } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);
  const [dataBukuAPI, setDataBukuAPI] = useState(null);

  useEffect(() => {
    const fetchDataBuku = async () => {
      try {
        const response = await fetch("http://10.2.0.57:5127/buku");
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

  const handleBookmark = () => {
    const updatedDataBuku = dataBukuAPI.map(book => {
      if (book.id === item.id) {
        return { ...book, isBookmarked: !book.isBookmarked };
      }
      return book;
    });
    setIsBookmarked(!isBookmarked);
  };

  const handleAddToCart = () => {
    navigation.navigate('Cart');
  };

  if (!dataBukuAPI) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <FontAwesome name="arrow-left" size={20} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBookmark} style={styles.iconButton}>
          <FontAwesome name={isBookmarked ? "bookmark" : "bookmark-o"} size={20} color={isBookmarked ? Colors.yellow : Colors.gray} />
        </TouchableOpacity>
      </View>
      <ScrollView vertical style={styles.scrollView}>
        <Image 
          source={{ uri: item.cover }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.judul}</Text>
          <Text style={styles.price}>Rp {item.harga}</Text>
          <Text style={styles.synopsisTitle}>Synopsis</Text>
          <Text style={styles.synopsisText}>{item.sinopsis}</Text>
          <Text style={styles.synopsisTitle}>kategori</Text>
          <Text style={styles.genre}>{item.kategori.join(', ')}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleAddToCart} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  detailsContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genre: {
    fontSize: 18,
    fontStyle: 'bold',
    marginBottom: 10,
  },
  synopsisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  synopsisText: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  price: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: Colors.yellow,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: Colors.white,
  },
});