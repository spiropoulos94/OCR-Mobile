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

const showToast = (product, type = 'success') => {
  let text =
    type === 'success' ? `Added ${product} !` : `Could not add ${product} !`;

  let duration = type === 'success' ? 1000 : 1500;

  Toast.show({
    type: type,
    text1: text,
    visibilityTime: duration,
  });
};

const emptyProduct = {
  name: '',
  expDate: null,
  addedOn: null,
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  input: {
    // height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  inputLabel: {
    marginLeft: 10,
    marginTop: 10,
  },
});

const AddProductForm = ({setProducts, products}) => {
  const [productName, setProductName] = useState('');
  const [expDate, setExpDate] = useState(new Date());

  const handleDateChange = e => {
    setExpDate(new Date(e.nativeEvent.timestamp));
  };

  const addToFridge = () => {
    let product = {
      ...emptyProduct,
      name: productName,
      expDate: expDate,
      expDateTs: new Date(expDate).getTime(),
      addedOn: new Date().getTime(),
    };

    showToast(productName, 'success');
    setProductName('');

    setProducts(oldProducts => [...oldProducts, product]);
  };

  return (
    <View style={styles.form}>
      {/* <Text style={styles.inputLabel}>Product name </Text> */}
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
        placeholder="product name"
      />
      <Text style={styles.inputLabel}>Exp Date </Text>
      <DateTimePicker
        display="spinner"
        mode="date"
        value={expDate}
        onChange={handleDateChange}
        minimumDate={new Date()}
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
