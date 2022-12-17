import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';

import AddProductForm from '../components/AddProductForm';

const AddToFridgeScreen = ({products, setProducts}) => {
  return (
    <ScrollView>
      <AddProductForm products={products} setProducts={setProducts} />
    </ScrollView>
  );
};

export default AddToFridgeScreen;
