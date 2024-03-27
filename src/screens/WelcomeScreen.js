import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; // Tambahkan impor useNavigation

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=> navigation.navigate('MainHome'), 2500)
  }, [navigation])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* logo image and text */}
      <View style={styles.imageAndTextContainer}>
        <Image 
          source={require('../assets/image/welcome.png')} 
          style={styles.image} 
        />
        <Text style={styles.text}>Bramedia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  imageAndTextContainer: {
    alignItems: 'center',
  },
  image: {
    width: wp(50),
    height: wp(50),
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: wp(6),
    marginTop: 20,
  },
});