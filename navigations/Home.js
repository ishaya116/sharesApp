import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Your stack screens
import DetailsScreen from '../screens/DetailsScreen'; // Your stack screens
// import SignUpScreen from '../screens/SignUpScreen'


const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};