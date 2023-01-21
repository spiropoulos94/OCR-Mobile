import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import CustomButton from './Button';
import {ProductsContext} from '../contexts/products.context';
import TextRecognition from '@react-native-ml-kit/text-recognition';

import {parseDateFromText, extractDate, stringToTimestamp} from '../utils/date';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

  const [img, setImage] = useState(
    'file:///Users/nikosspiropoulos/Library/Developer/CoreSimulator/Devices/76618915-A5FE-4706-9C78-9141A7D68297/data/Containers/Data/Application/8792F630-3580-4131-931B-01572F101888/tmp/6A7BA3F4-432E-4CC6-AD6F-BDB87E95FFB1.jpg',
  );

  const {dispatch} = useContext(ProductsContext);

  const handleDateChange = e => {
    setExpDate(new Date(e.nativeEvent.timestamp));
  };
  ``;
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose from Library',
    cancelButtonTitle: 'Cancel',
  };

  const selectImageFromLib = async () => {
    let returnV = launchImageLibrary(options, res => {
      console.log(res);
      setImage(res.assets[0].uri);
      return res;
    });
    console.log('');
    console.log({returnV});
    // try {
  };

  const handlePress = async () => {
    try {
      const result = await TextRecognition.recognize(
        img,
        // 'file:///Users/nikosspiropoulos/Desktop/Image.jpeg', // pass
        // 'file:///Users/nikosspiropoulos/Library/Developer/CoreSimulator/Devices/76618915-A5FE-4706-9C78-9141A7D68297/data/Containers/Data/Application/8792F630-3580-4131-931B-01572F101888/tmp/6A7BA3F4-432E-4CC6-AD6F-BDB87E95FFB1.jpg', // pass
        // 'file:///Users/nikosspiropoulos/Development/Projects/OCR/new_ocr_test/samples/1copy.jpg', // pass
        // 'file:///Users/nikosspiropoulos/Development/Projects/OCR/new_ocr_test/samples/3copy.jpg', // fail 0 results
        // 'file:///Users/nikosspiropoulos/Development/Projects/OCR/new_ocr_test/samples/IMG_8516.jpg', // fail
        // 'file:///Users/nikosspiropoulos/Development/Projects/OCR/new_ocr_test/samples/IMG_8515.jpg'
      );
      let totalTexts = [];
      for (let block of result.blocks) {
        // totalText += ' ' + block.text;
        totalTexts.push(block.text);
        for (let line of block.lines) {
          // totalText += '' + line.text;
          totalTexts.push(line.text);
        }
      }
      // let texts = parseDateFromText(totalText);
      console.log('Total texts -> ', totalTexts);
      let date = extractDate(totalTexts)[0];
      console.log('Date => ', date);
      // timestamp is wrong
      console.log('Date TS => ', `${stringToTimestamp(date)}`);
    } catch (e) {
      console.log(e.message);
      alert('Error: Check console');
    }
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
      <Pressable style={{marginTop: 30}}>
        <Button onPress={() => handlePress()} title="Toggle OCR" />
      </Pressable>
      <Pressable style={{marginTop: 30}}>
        <Button
          onPress={() => selectImageFromLib()}
          title="Select Image From Library"
        />
      </Pressable>
      <Image
        style={{
          width: '100%',
          height: 100,
          resizeMode: 'contain',
        }}
        source={{
          uri: img,
        }}
      />
    </>
  );
};

export default AddProductForm;
