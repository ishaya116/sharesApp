import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home'; // we'll create this next
import ScreenA from '../screens/ScreenA';
import About from '../screens/About'
import LoginScreen from '../screens/LoginScreen';
import Shares from '../screens/Shares';
import Referral from '../screens/Referral'
import Contact from '../screens/Contact'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator  >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ScreenA" component={ScreenA} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="Shares" component={Shares} />
      <Drawer.Screen name="Referral" component={Referral} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}
