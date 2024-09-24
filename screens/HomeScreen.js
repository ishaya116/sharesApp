import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';
import ImageSlider from './ImageSlider'
import ScreenA from './ScreenA';
import ScreenB from './About'
import LoginScreen from './LoginScreen'




export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
      <Text style={{fontSize:16,fontWeight:'bold',marginBottom:50,marginTop:50,backgroundColor:'green'}}>UNLEASH THE POWER OF YOUR INVESTMENT.</Text> 
      <Text style={styles.text1}>Be an Investor and live your dream life ,</Text> 
      <Text style={styles.text1}>follow the links bellow to read more about the project.</Text> 
      

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate(LoginScreen)}
      >
        <Text style={styles.buttonText1}>Start Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() =>navigation.navigate(ScreenB)}
      >
        <Text style={styles.buttonText2}>Terms</Text>
      </TouchableOpacity>

      </View>
    
      <View style={styles.carousel}>
        <ImageSlider />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'white',
        left:4,
    },
    buttonContainer:{
      flexDirection:'row',
      top:50
    },
    button1: {
      backgroundColor: 'green',
      padding: 10,
      margin: 7,
      borderRadius: 5,
      width: 140,
      alignItems: 'center',
      borderColor:'green'
    },
    button2: {
      backgroundColor: 'white',
      padding: 10,
      margin: 7,
      borderRadius: 5,
      width: 140,
      alignItems: 'center',
      borderColor:'green',
      borderWidth:2
    },
    buttonText1: {
      color: '#fff',
      fontSize: 16,
    },
    buttonText2: {
      color: 'black',
      fontSize: 16,
    },
    maincontainer:{
      flex:1,
    },
    carousel:{
      top:100
    },
    text1:{
      fontSize:16,
      fontWeight:'bold'
    }
})
