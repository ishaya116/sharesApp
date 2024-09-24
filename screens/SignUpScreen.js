// src/SignUpPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-native-paper';
const logo = require("../assets/logo.png")



const SignUpScreen = () =>{
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Replace with your sign-up logic
    Alert.alert('Sign Up', `Email: ${data.email}\nPassword: ${data.password}`);
  };

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode='contain' />

      <Text style={styles.header}>Create an Account</Text>
      <Controller
        control={control}
        name="email"
        rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    bottom:60
  },
  image : {
    height : 100,
    width : 110,
    left:100,
    bottom:70
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color:'#786C56'
  },
  input: {
    height: 40,
    borderColor: '#786C56',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 12,
    backgroundColor:'#786C56'
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default SignUpScreen;
