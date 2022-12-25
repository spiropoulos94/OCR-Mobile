import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  drawerWrapper: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 9999999,
  },
  visible: {
    top: 999,
  },
});

const Drawer = ({status, setStatus}) => {
  const getStatus = status => {
    if (status) {
      return {
        top: 0,
      };
    } else {
      return {top: 999999};
    }
  };

  return (
    <View style={[styles.drawerWrapper, getStatus(status)]}>
      <Text>Drawer is {status ? 'trueee' : 'false'}</Text>
      <Button title="CLOSE" onPress={() => setStatus(false)} />
    </View>
  );
};

export default Drawer;
