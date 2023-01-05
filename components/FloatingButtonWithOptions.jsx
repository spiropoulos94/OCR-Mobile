import React from 'react';
import {SpeedDial, FAB} from '@rneui/themed';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatingButtonWithOptions = ({floatingOptions}) => {
  const [open, setOpen] = React.useState(false);

  console.log({floatingOptions});

  const callAndClose = (cb, shouldClose = true) => {
    cb();
    if (shouldClose) {
      setOpen(false);
    }
  };

  return (
    <SpeedDial
      // overlayColor="transparent"
      style={styles.container}
      size="large"
      color="#31C283"
      isOpen={open}
      icon={{name: 'edit', color: '#fff'}}
      openIcon={{name: 'close', color: '#fff'}}
      onOpen={() => {
        setOpen(!open);
      }}
      onClose={() => setOpen(!open)}>
      {/* <SpeedDial.Action
        color="#4C97D9"
        // title="Filter"
        onPress={() => console.log('Add Something')}>
        <Icon name="filter" color="white" size={25} />
      </SpeedDial.Action>
      <SpeedDial.Action
        color="#d9594c"
        // title="Delete"
        onPress={() => console.log('Add Something')}>
        <Icon name="trash" color="white" size={25} />
      </SpeedDial.Action> */}
      {floatingOptions &&
        floatingOptions.map(f => (
          <SpeedDial.Action
            size="large"
            color={f.color}
            title={f.title}
            onPress={() => callAndClose(f.onPress)}>
            {f.icon}
          </SpeedDial.Action>
        ))}
    </SpeedDial>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 99999,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default FloatingButtonWithOptions;
