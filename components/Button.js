import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
const CustomButton = ({title, clickFN, disabled}) => {
  return <Button disabled={disabled} title={title} onPress={clickFN} />;
};

export default CustomButton;
