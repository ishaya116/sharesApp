// import React, { useState } from 'react'
// import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity } from 'react-native'
// const logo = require("../assets/logo.png")
// import LoginScreen from './LoginScreen'




// export default function ScreenA({navigation}) {
//     const [click,setClick] = useState(false);
//     const {username,setUsername}=  useState("");
//     const {password,setPassword}=  useState("");
    
//   return (
//     <SafeAreaView style={styles.container}>
        
//         <Image source={logo} style={styles.image} resizeMode='contain' />
//         <Text style={styles.title}>Singup</Text>
//         <View style={styles.inputView}>
//             <TextInput style={styles.input} placeholder='Email' value={username} onChangeText={setUsername} autoCorrect={false}
//         autoCapitalize='none' />
//             <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
//         autoCapitalize='none'/>
//         </View>
//         <View style={styles.rememberView}>
//             {/* <View style={styles.switch}>
//                 <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
//                 <Text style={styles.rememberText}>Remember Me</Text>
//             </View> */}
//             <View>
//                 <Pressable onPress={() => Alert.alert("Forget Password!")}>
//                     <Text style={styles.forgetText}>Forgot Password?</Text>
//                 </Pressable>
//             </View>
//         </View>

//         <View style={styles.buttonView}>
//             <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my firbase page")}>
//                 <Text style={styles.buttonText}>Login</Text>
//             </Pressable>
//             {/* <Text style={styles.optionsText}>OR LOGIN WITH</Text> */}
//         </View>
        

//         <Text style={styles.footerText}>Already Have Account? <TouchableOpacity onPress={() => navigation.navigate(ScreenA)}><Text style={styles.signup}>  Sign Up</Text></TouchableOpacity></Text>

        
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container : {
//     alignItems : "center",
//     flex:1,
//     paddingTop: 20,
//     backgroundColor:'white'
//   },
//   image : {
//     height : 100,
//     width : 110
//   },
//   title : {
//     fontSize : 20,
//     fontWeight : "bold",
//     // textTransform : "uppercase",
//     textAlign: "center",
//     paddingVertical : 40,
//     color : "green"
//   },
//   inputView : {
//     gap : 15,
//     width : "100%",
//     paddingHorizontal : 40,
//     marginBottom  :5
//   },
//   input : {
//     height : 40,
//     paddingHorizontal : 20,
//     borderColor : "green",
//     borderWidth : 1,
//     borderRadius: 4,
//     marginBottom:12,
//     paddingHorizontal:8
//   },
//   rememberView : {
//     width : "100%",
//     paddingHorizontal : 50,
//     justifyContent: "space-between",
//     alignItems : "center",
//     flexDirection : "row",
//     marginBottom : 10
//   },


//   forgetText : {
//     fontSize : 11,
//     color : "black",
//     left:170,
//     bottom:10
//   },
//   button : {
//     backgroundColor : "green",
//     height : 45,
//     borderColor : "black",
//     borderWidth  : 1,
//     borderRadius : 5,
//     alignItems : "center",
//     justifyContent : "center"
//   },
//   buttonText : {
//     color : "white"  ,
//     fontSize: 14,
//     fontWeight : "bold"
//   }, 
//   buttonView :{
//     width :"100%",
//     paddingHorizontal : 50
//   },
//   optionsText : {
//     textAlign : "center",
//     paddingVertical : 10,
//     color : "black",
//     fontSize : 13,
//     marginBottom : 6
//   },
//   mediaIcons : {
//     flexDirection : "row",
//     gap : 15,
//     alignItems: "center",
//     justifyContent : "center",
//     marginBottom : 23
//   },
//   icons : {
//     width : 40,
//     height: 40,
//   },
//   footerText : {
//     textAlign: "center",
//     color : "black",
//   },
//   signup : {
//     color : "#786C56",
//     fontSize : 13
//   }
// })



import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../supabaseClient';

const ScreenA = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      Alert.alert('Login failed', error.message);
    } else {
      navigation.navigate('Shares');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default ScreenA;







































// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default function ScreenA({ navigation }) {
//   return (
//     <View>
//       <Text>Screen A</Text>

//       <Button
//         title="Open Drawer"
//         onPress={() => navigation.openDrawer()}
//       />
//     </View>
//   );
// }
