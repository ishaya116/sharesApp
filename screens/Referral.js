import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import ScreenA from './ScreenA'

const Referral = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Our referral system</Text>
          <Text style={styles.text}>REFERRAL BONUS:</Text>
          <Text style={styles.text}>If person A refers person B, person A will get 8% of whatever person B invested.</Text>
          <Text style={styles.text}>For instance person A refers person B , and person B invested ₦15,000, now person A will get 8% of</Text>
          <Text style={styles.text}>₦15,000 that person B invested which is ₦1,200.</Text>
          <Text style={styles.text}>And if person B refers or invites person C , now person B will get 8% of whatever person C invested and this goes on and on. Should person B invite 1000 people he will get 8% of what the individual 1000 people invested.</Text>
          <Text style={styles.text}>REBATE:</Text>
          <Text style={styles.text}>This is the bonus earned from daily income .</Text>
          <Text style={styles.text}>For instance, if person A refers person B , and person B invest ₦15,000. This means person B will have</Text>
          <Text style={styles.text}>₦1,000 as his daily income, now person A will have 4% of the daily income of person B which is ₦40.</Text>
          <Text style={styles.text}>Should person B invites person C , person B will have 4% of daily income of person C . And this goes on and on.</Text>
          
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(ScreenA)}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  textContainer: {
    padding: 5,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Referral;
