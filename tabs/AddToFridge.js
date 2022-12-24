import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import AddProductForm from '../components/AddProductForm';
import {pageStyles} from '../styles/pageStyles';

const AddToFridgeScreen = ({products, setProducts}) => {
  return (
    <View style={pageStyles.container}>
      <AddProductForm products={products} setProducts={setProducts} />
    </View>
  );
};

export default AddToFridgeScreen;
