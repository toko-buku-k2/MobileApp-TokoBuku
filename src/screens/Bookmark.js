import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { selectBookmark } from '../database/index1';
import { ctgrStyles } from '../components/Style';
import BookDetail from './BookDetail';
import { useNavigation } from '@react-navigation/native';

const Bookmark = () => {
  const navigation = useNavigation();
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

  const fetchBookmarkedBooks = () => {
    selectBookmark((bookmarkData) => {
      setBookmarkedBooks(bookmarkData);
    });
  };

  fetchBookmarkedBooks();

  const handleImagePress = (item) => {
    navigation.navigate('BookDetail', { item });
  };

  return (
    <View style={ctgrStyles.container}>
      <Text style={ctgrStyles.title}>
        Bookmarked Books
      </Text>
      <View style={ctgrStyles.columnContainer}>
        {bookmarkedBooks.map(item => (
          <BookmarkCard key={item.id} item={item} onPress={() => handleImagePress(item)} />
        ))}
      </View>
    </View>
  );
}

const BookmarkCard = ({ item, onPress }) => {
  return (
    <Pressable onPress={() => onPress(item)} style={ctgrStyles.cardContainer}>
      <View>
        <Image
          source={{ uri: item.cover }}
          style={ctgrStyles.image}
        />
        <Text style={ctgrStyles.titleText}>
          {item.judul}
        </Text>
      </View>
    </Pressable>
  );
}

export default Bookmark;