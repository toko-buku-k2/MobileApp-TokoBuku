import { View, Text, welcomeStylesheet, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { welcomeStyles } from '../components/Style';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=> navigation.navigate('MainHome'), 2500)
  }, [navigation])

  return (
    <View style={welcomeStyles.container}>
      <StatusBar style="light" />

      {/* logo image and text */}
      <View style={welcomeStyles.imageAndTextContainer}>
        <Image 
          source={require('../assets/image/welcome.png')} 
          style={welcomeStyles.image} 
        />
        <Text style={welcomeStyles.text}>Bramedia</Text>
      </View>
    </View>
  );
}