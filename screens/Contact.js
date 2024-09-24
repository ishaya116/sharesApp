// ContactScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import Slideshow from "react-native-image-slider-show";
import ImageSlider from './ImageSlider'



const whatsapp = require("../assets/whatsapp.png")
const email = require("../assets/email.png")
const phone = require("../assets/phone.png")

const Contact = (props) => {
  // Define the company's contact information
  const whatsappNumber = '+234-701-826-3536'; // Replace with your company number
  const email = 'uyjmultitrade@gmail.com'; // Replace with your company email
  const phoneNumber = '+234-701-826-3536'; // Replace with your company phone number

  // Function to handle WhatsApp link
  const handleWhatsAppPress = () => {
    Linking.openURL(`https://wa.me/${whatsappNumber}`);
  };

  // Function to handle email link
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  // Function to handle phone link
  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
        <ImageSlider />
      <TouchableOpacity onPress={handleWhatsAppPress} style={styles.iconContainer}>
        {/* <Image source={{ uri: 'https://example.com/whatsapp-icon.png' }} style={styles.icon} /> */}
        <Image source={whatsapp } style={styles.icon} />
        <Text style={styles.text}>Chat on WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEmailPress} style={styles.iconContainer}>
        <Image source={email} style={styles.icon} />
        <Text style={styles.text}>Send an Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePhonePress} style={styles.iconContainer}>
        <Image source={phone} style={styles.icon} />
        <Text style={styles.text}>Call Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'column',
  },
  iconContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    
   
  },
  icon: {
    width: 50,
    height: 50,
    // marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Contact;
