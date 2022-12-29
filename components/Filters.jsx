import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
// contexts
import {ProductsContext} from '../contexts/products.context';
import CustomButton from './Button';

const Filters = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {products, filteredProducts, setFilteredProducts} =
    useContext(ProductsContext);

  return (
    <View>
      <Text>WE ARE THE FILTERS</Text>
      <CustomButton
        title={'Add to Fridge'}
        clickFN={() => {
          let filteredProductsss = [];

          setFilteredProducts(filteredProductsss);
        }}
      />
    </View>
  );
};

export default Filters;
