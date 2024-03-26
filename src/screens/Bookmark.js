import React from 'react';
import { View, Text, Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { bookData } from '../constants';

export default function Bookmark() {
  const bookmarkedBooks = bookData.filter(book => book.isBookmarked);

  return (
    <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
      <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>Bookmarked Books</Text>
      <View>
        <MasonryList
          data={bookmarkedBooks}
          keyExtractor={(item) => item.ISBN.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, marginTop: 5, marginBottom: 10, marginRight: 10 }}>
              <Image
                source={{ uri: item.image.uri }}
                style={{ width: '100%', height: hp(35), borderRadius: 15, marginVertical: 5 }}
              />
              <Text style={{ textAlign: 'center', marginTop: 1, fontSize: 12, fontWeight: 'bold' }}>
                {item.title}
              </Text>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}