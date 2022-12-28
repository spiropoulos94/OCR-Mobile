import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {ButtonGroup, Button} from '@rneui/themed';
// contexts
import {ProductsContext} from '../contexts/products.context';

const Filters = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {products, filteredProducts, setFilteredProducts} =
    useContext(ProductsContext);

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
      <Button
        onPress={() => {
          alert(1);
          let filteredProductsss = [];
          setFilteredProducts(filteredProductsss);
        }}>
        Apply
      </Button>
    </View>
  );
};

export default Filters;
