import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { dataBuku, getBuku } from '../api';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../assets/Colors/Colors';
import { ctgrStyles,srchStyle } from './Style';

const Categories = () => {
  const navigation = useNavigation();
  const [buku, setData] = useState([]);
  const [searchKey, setKey] = useState('');

  const searchBooks = () => {
    var key = searchKey.trim();
    var url = '';
    if (key == '') {
      dataBuku(data => {
        if (data != 'message') {
          setData(data);
        } else {
          setData(null);
        }
      });
    } else {
      getBuku(key, data => {
        if (data != 'message') {
          setData(data);
        } else {
          setData(null);
        }
      });
    }
  };

  useEffect(() => {
    dataBuku((data) => {
      setData(data);
    });
  }, []);

  const handleImagePress = (item) => {
    navigation.navigate('BookDetail', { item });
  };

  return (
    <View style={ctgrStyles.container}>
      <View style={srchStyle.searchContainer}>
        <AntDesign name="search1" size={24} color={Colors} />
        <TextInput
          placeholder='Search'
          onChangeText={(value) => setKey(value)}
          onSubmitEditing={searchBooks}
          style={srchStyle.input}
        />
      </View>
      <Text style={ctgrStyles.title}>
        Most Popular
      </Text>
      <View style={ctgrStyles.columnContainer}>
        {buku.map(item => (
          <CategoriesCard key={item.id} item={item} onPress={() => handleImagePress(item)} />
        ))}
      </View>
    </View>
  );
}

const CategoriesCard = ({ item, onPress }) => {
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

export default Categories;