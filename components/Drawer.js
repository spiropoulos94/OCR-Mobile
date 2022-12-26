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

const FullHeightModal = ({title, status, setStatus, children}) => {
  return (
    <Modal
      visible={status}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => {
        setStatus(false);
      }}>
      <ModalHeader title={title} setStatus={setStatus} />
      {children}
    </Modal>
  );
};

const CustomHeightModal = ({title, status, setStatus, children}) => {
  return (
    <Modal
      visible={status}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => {
        setStatus(false);
      }}>
      <ModalHeader title={title} setStatus={setStatus} /> {children}
    </Modal>
  );
};

const ModalHeader = ({title, setStatus}) => {
  return (
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
  );
};

const Drawer = ({status, setStatus, children, title, fullheight}) => {
  return (
    // <Modal
    //   transparent={fullheight ? false : true}
    //   animationType={fullheight ? 'slide' : ''}
    //   presentationStyle={fullheight ? 'pageSheet' : ''}
    //   visible={status}
    //   onRequestClose={() => {
    //     setStatus(false);
    //   }}>
    //   <View
    //     style={{
    //       backgroundColor: fullheight ? '' : 'rgba(0,0,0,0.5)',
    //       height: '100%',
    //     }}>
    //     <View style={[styles.drawer, fullheight ? '' : styles.customHeight]}>
    //       <ModalHeader title={title} setStatus={setStatus} />
    //       {children}
    //     </View>
    //   </View>
    // </Modal>
    <>
      {fullheight ? (
        <FullHeightModal
          status={status}
          setStatus={setStatus}
          children={children}
          title={title}>
          {children}
        </FullHeightModal>
      ) : (
        <CustomHeightModal
          status={status}
          setStatus={setStatus}
          children={children}
          title={title}>
          {children} >{children}
        </CustomHeightModal>
      )}
    </>
  );
};

export default Drawer;
