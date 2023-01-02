import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from '@rneui/themed';

const CustomButton = ({title, clickFN, disabled}) => {
  return (
    <View>
      <Button disabled={disabled} title={title} onPress={clickFN} />
    </View>
  );
};

export default CustomButton;
