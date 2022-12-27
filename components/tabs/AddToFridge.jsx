import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import AddProductForm from './../AddProductForm';
import {pageStyles} from '../../styles/pageStyles';
//contexts
import {ProductsContext} from '../../contexts/products.context';

const AddToFridgeScreen = () => {
  const {products, setProducts} = useContext(ProductsContext);

  return (
    <View style={pageStyles.container}>
      <AddProductForm products={products} setProducts={setProducts} />
    </View>
  );
};

export default AddToFridgeScreen;
