import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profil() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/image/profile.jpg')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={styles.infoText}>Username: FreyaJayawardana</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={styles.infoText}>Email: freyyya@gmail.com</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialIcons name="phone" size={24} color="black" />
          <Text style={styles.infoText}>Telephone: +628135442190</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
