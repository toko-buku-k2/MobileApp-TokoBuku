import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { profilStyles } from '../components/Style';

export default function Profil() {
  return (
    <View style={profilStyles.container}>
      <View style={profilStyles.profileContainer}>
        <Image
          source={require('../assets/image/profile.png')}
          style={profilStyles.profileImage}
        />
      </View>
      <View style={profilStyles.infoContainer}>
        <View style={profilStyles.infoItem}>
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={profilStyles.infoText}>Username: FreyaJayawardana</Text>
        </View>
        <View style={profilStyles.infoItem}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={profilStyles.infoText}>Email: freyyya@gmail.com</Text>
        </View>
        <View style={profilStyles.infoItem}>
          <MaterialIcons name="phone" size={24} color="black" />
          <Text style={profilStyles.infoText}>Telephone: +628135442190</Text>
        </View>
      </View>
    </View>
  );
}