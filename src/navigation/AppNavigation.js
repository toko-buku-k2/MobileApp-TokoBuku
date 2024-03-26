import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Profil from '../screens/Profil';
import Bookmark from '../screens/Bookmark';
import Cart from '../screens/Cart';
import BookDetail from '../screens/BookDetail';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{tabBarIcon:({color,size})=>(
            <FontAwesome name="home" size={24} color={color} />
        )
        }}/>
      <Tab.Screen name="Bookmark" component={Bookmark}
      options={{tabBarIcon:({color,size})=>(
        <FontAwesome name="bookmark" size={24} color={color} />
    )
    }} />
      <Tab.Screen name="Cart" component={Cart}  
      options={{tabBarIcon:({color,size})=>(
        <FontAwesome5 name="shopping-cart" size={24} color={color} />
    )
    }}/>
      <Tab.Screen name="Profil" component={Profil} 
      options={{tabBarIcon:({color,size})=>(
        <MaterialCommunityIcons name="account" size={24} color={color} />
    )
    }}/>
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainHome" component={BottomTabNavigator} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;