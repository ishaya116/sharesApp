import React from 'react';
import { View, Text,Button } from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
        
      />
    </View>
  );
}


