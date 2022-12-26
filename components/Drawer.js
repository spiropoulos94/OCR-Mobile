import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  drawer: {
    padding: 10,
    backgroundColor: 'yellow',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 5,
    marginBottom: 10,
  },
  customHeight: {
    backgroundColor: 'blue',
    marginTop: 'auto',
    minHeight: '40%',
    borderRadius: 20,
  },
});

const Drawer = ({status, setStatus, children, title, fullheight}) => {
  return (
    <Modal
      transparent={fullheight ? false : true}
      animationType="slide"
      presentationStyle={fullheight ? 'pageSheet' : ''}
      visible={status}
      onRequestClose={() => {
        setStatus(false);
      }}>
      {/* <SafeAreaView> */}
      <View style={[styles.drawer, fullheight ? '' : styles.customHeight]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setStatus(false)}>
            <Icon name="chevron-down" size={20} />
          </TouchableOpacity>
          <Text> {title} </Text>
          <TouchableOpacity>
            <Text> Reset </Text>
          </TouchableOpacity>
          {/* <Icon name="filter" size={20} /> */}
        </View>
        {children}
      </View>
      {/* </SafeAreaView> */}
    </Modal>
  );
};

export default Drawer;
