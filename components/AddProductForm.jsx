import React, {useState, useRef, useContext} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import CustomButton from './Button';
import {ProductsContext} from '../contexts/products.context';

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
    borderRadius: 10,
    marginBottom: 15,
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

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [expDate, setExpDate] = useState(new Date());

  const {dispatch} = useContext(ProductsContext);

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
      // addedOn: count.current,
    };

    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        product: product,
      },
    });

    showToast(productName, 'success');
    setProductName('');
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setProductName}
          value={productName}
          placeholder="product name"
        />
        <Text style={styles.inputLabel}>Exp Date </Text>
      </View>
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
    </>
  );
};

export default AddProductForm;
