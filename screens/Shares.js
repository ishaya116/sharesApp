// ItemList.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, Alert } from 'react-native';

const items = [
  { id: '1', name: 'UYJ Water', price: '$10', image: require('../assets/water.jpeg') },
  { id: '2', name: 'UYJ Flour', price: '$10', image: require('../assets/flour.jpeg') },
  { id: '3', name: 'UYJ Cycles', price: '$20', image: require('../assets/cycle.jpeg') },
  { id: '4', name: 'UYJ Sugars', price: '$30', image: require('../assets/sugar.jpeg') },
  { id: '5', name: 'UYJ Garri', price: '$30', image: require('../assets/garri.jpeg') },
  { id: '6', name: 'UYJ Maggi', price: '$30', image: require('../assets/maggi.jpeg') },
  { id: '7', name: 'UYJ Indomie', price: '$30', image: require('../assets/indomie.jpeg') },
  { id: '8', name: 'UYJ Salt', price: '$30', image: require('../assets/salt.jpeg') },
  { id: '9', name: 'UYJ Station', price: '$30', image: require('../assets/station.jpeg') },
  { id: '10', name: 'UYJ House', price: '$30', image: require('../assets/house.jpeg') },
  { id: '11', name: 'UYJ School', price: '$30', image: require('../assets/school.jpeg') },
  { id: '12', name: 'UYJ Cars', price: '$30', image: require('../assets/car.jpeg') },
  { id: '13', name: 'keke napep', price: '$30', image: require('../assets/keke.jpeg') },
  // Add more items with images as needed
];

const Shares=()=> {

  const handleBuy = (item) => {
    // This is where you handle the buy action
    Alert.alert('Purchase', `You bought ${item.name} for ${item.price}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Button title="Buy" onPress={() => handleBuy(item)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
  },
  itemImage: {
    width: 130,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
});

export default Shares;
