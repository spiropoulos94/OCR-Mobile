import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

import CustomButton from './Button';

import DateTimePicker from '@react-native-community/datetimepicker';

import Toast from 'react-native-toast-message';

const showToast = product => {
  Toast.show({
    type: 'success',
    text1: `Added ${product}`,
    visibilityTime: 800,
  });
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputLabel: {
    marginLeft: 10,
    marginTop: 10,
  },
});

const AddProductForm = () => {
  const [productName, setProductName] = useState('Useless Text');
  const [expDate, setExpDate] = useState(new Date());

  const handleCHange = e => {
    setExpDate(new Date(e.nativeEvent.timestamp));
  };

  const addToFridge = () => {
    console.log('ADD TO FRIDGE');
    console.log(productName);
    showToast(productName);
    setProductName('');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.inputLabel}>Product name </Text>
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
      />
      <Text style={styles.inputLabel}>Exp Date </Text>
      <DateTimePicker
        display="spinner"
        mode="date"
        value={expDate}
        onChange={handleCHange}
      />
      <CustomButton
        title={'Add to Fridge'}
        clickFN={() => addToFridge()}
        disabled={productName.length < 1}
      />
    </View>
  );
};

export default AddProductForm;
