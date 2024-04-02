import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../assets/Colors/Colors';
import { dataBuku } from '../../api';
import { srchStyle } from '../Style';

export default function SearchBar({ setSearchText, navigation }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const foundItem = dataBuku.find(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
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
    <View style={srchStyle.container}>
      <View style={srchStyle.searchContainer}>
        <AntDesign name="search1" size={24} color={Colors} />
        <TextInput
          placeholder='Search'
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={handleSearch}
          style={srchStyle.input}
        />
      </View>
    </View>
  );
}