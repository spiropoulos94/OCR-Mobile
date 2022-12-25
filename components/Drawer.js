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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 5,
    marginBottom: 10,
  },
});

const Drawer = ({status, setStatus, children, title}) => {
  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={status}
      onRequestClose={() => {
        setStatus(false);
      }}>
      <View style={styles.drawer}>
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
    </Modal>
  );
};

export default Drawer;
