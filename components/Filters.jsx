import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ButtonGroup, Button} from '@rneui/themed';

const Filters = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View>
      <Text>WE ARE THE FILTERS</Text>
      <ButtonGroup
        buttons={['SIMPLE', 'BUTTON', 'GROUP']}
        selectedIndex={selectedIndex}
        onPress={value => {
          setSelectedIndex(value);
        }}
        containerStyle={{marginBottom: 20}}
      />
      <Button>Apply</Button>
    </View>
  );
};

export default Filters;
