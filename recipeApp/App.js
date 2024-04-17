import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextComponent, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (

  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex:1,
    backgroundColor: "cornsilk",    
},
});
