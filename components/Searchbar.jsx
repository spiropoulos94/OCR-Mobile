import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Searchbar = ({style}) => {
  const [input, setInput] = useState('');

  return (
    <View style={[styles.searchBarWrapper, style]}>
      <Icon style={styles.icon} name="search" size={20} />
      <TextInput
        style={styles.textInput}
        onChangeText={setInput}
        value={input}
        returnKeyType="search"
        // onSubmitEditing={() => null}
      />

      <Icon
        onPress={() => setInput('')}
        style={styles.icon}
        name="close"
        size={20}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchBarWrapper: {
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
});
