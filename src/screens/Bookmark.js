import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { dataBuku } from '../api';

export default function Bookmark() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

  useEffect(() => {
    const fetchBookmarkedBooks = () => {
      dataBuku(data => {
        const bookmarked = data.filter(book => book.isBookmarked);
        setBookmarkedBooks(bookmarked);
      });
    };

    fetchBookmarkedBooks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Bookmarked Books</Text>
      <View style={styles.bookmarkListContainer}>
        <MasonryList
          data={bookmarkedBooks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.bookmarkItemContainer}>
              <Image
                source={{ uri: item.cover }}
                style={styles.bookmarkImage}
              />
              <Text style={styles.bookmarkTitle}>
                {item.judul}
              </Text>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  bookmarkListContainer: {
    marginTop: 10,
  },
  bookmarkItemContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  bookmarkImage: {
    width: '100%',
    height: hp(35),
    borderRadius: 15,
    marginVertical: 5,
  },
  bookmarkTitle: {
    textAlign: 'center',
    marginTop: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
});