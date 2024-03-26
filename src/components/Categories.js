import React, { useState,useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';
import { dataBuku } from '../constants';

export default function Categories() {
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
    <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
      <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>Most Popular</Text>
      <View>
      {Array.isArray(buku) && buku.map(item => (
        <CategoriesCard key={item.id} item={item} onPress={() => handleImagePress(item)} />
      ))}
      </View>
    </View>
  );
  // return (
  //   <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
  //     <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>Most Popular</Text>
  //     <View>
  //       <MasonryList
  //         data={data}
  //         keyExtractor={(item) => item.id.toString()}
  //         numColumns={2}
  //         showsVerticalScrollIndicator={false}
  //         renderItem={({ item, index }) => (
  //           <CategoriesCard item={item} index={index} onPress={() => handleImagePress(item)} />
  //         )}
  //         onEndReachedThreshold={0.1}
  //       />
  //     </View>
  //   </View>
  // );
}

const CategoriesCard = ({ item, onPress }) => {
  return (
    <View style={{ flex: 1, marginTop: 5, marginBottom: 10, marginRight: 10 }}>
      <Pressable onPress={() => onPress(item)}>
        <View>
          <Image
            source={{ uri: item.cover }}
            style={{ width: '100%', height: hp(35), borderRadius: 15, marginVertical: 5 }}
          />
          <Text style={{ textAlign: 'center', marginTop: 1, fontSize: 12, fontWeight: 'bold' }}>
            {item.judul}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}