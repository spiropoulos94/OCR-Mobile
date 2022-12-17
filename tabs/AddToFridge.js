import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';

import AddProductForm from '../components/AddProductForm';

const AddToFridgeScreen = () => {
  return (
    <ScrollView>
      <AddProductForm />
    </ScrollView>
  );
};

export default AddToFridgeScreen;
