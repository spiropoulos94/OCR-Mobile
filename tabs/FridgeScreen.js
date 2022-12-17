import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const FridgeScreen = ({products}) => {
  return (
    <View>
      <Text>Fridge Screen</Text>
      {products.map(p => (
        <Text>{p.name}</Text>
      ))}
    </View>
  );
};

export default FridgeScreen;
