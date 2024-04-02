import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { dataBuku } from '../api';
import { ctgrStyles } from './Style';

const Categories = () => {
  const navigation = useNavigation();
  const [buku, setData] = useState([]);

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