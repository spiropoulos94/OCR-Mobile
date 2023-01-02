import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
// contexts
import {ProductsContext} from '../contexts/products.context';
import CustomButton from './Button';

const Filters = ({setFilteredProducts, products}) => {
  return (
    <View>
      <Text>WE ARE THE FILTERS</Text>
      <CustomButton
        title={'APPLY'}
        clickFN={() => {
          console.log('FIlters applied!!');
          let newProducts = products.filter(p => p.name == 'Milk');
          console.log(newProducts);
          setFilteredProducts(newProducts);
        }}
      />
    </View>
  );
};

export default Filters;
