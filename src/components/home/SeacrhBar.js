import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../assets/Colors/Colors';
import { bookData } from '../../constants';

export default function SearchBar({ setSearchText, navigation }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const foundItem = bookData.find(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
    if (foundItem) {
      setSearchText(foundItem.title);
      Alert.alert(
        foundItem.title,
        `Author: ${foundItem.author}\nPrice: ${foundItem.price.displayValue}`,
        [
          { text: 'Ok', style: 'ok' },
          { text: 'Go', onPress: () => navigation.navigate('BookDetail', { item: foundItem }) }
        ]
      );
    } else {
      Alert.alert('Item not found', 'The item you searched for was not found.');
    }
  };

  return (
    <View style={{ marginTop: 10, marginHorizontal: 10 }}>
      <View style={{
        display: 'flex',
        marginBottom: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderWidth: 0.7,
        borderColor: Colors.gray,
        padding: 8,
        borderRadius: 10,
      }}>
        <AntDesign name="search1" size={24} color={Colors} />
        <TextInput
          placeholder='Search'
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={handleSearch}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}