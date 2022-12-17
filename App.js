/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const test = async () => {
    setCount(count + 1);
    console.log('Count raised!');
  };

  return (
    <SafeAreaView>
      <Text>I am text</Text>
      <Button onPress={() => test()} title="Count +1">
        {' '}
      </Button>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};

export default App;
