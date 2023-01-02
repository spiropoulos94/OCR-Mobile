import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// contexts
import {ProductsContext} from '../contexts/products.context';
import CustomButton from './Button';

const sortOptions = [
  {
    title: 'ExpDateAsc',
    label: 'Expiry date soonest to latest',
  },
  {
    title: 'ExpDateDesc',
    label: 'Expiry date latest to soonest',
  },
  {
    title: 'AddedDateAsc',
    label: 'Added date most recent first',
  },
  {
    title: 'AddedDateDesc',
    label: 'Added date oldest first',
  },
];

const Sort = () => {
  return (
    <View>
      <Text>Sort By</Text>
      {sortOptions.map(o => (
        <View key={o.title}>
          <Text>{o.label}</Text>
        </View>
      ))}
    </View>
  );
};

const Filters = ({setFilteredProducts, products}) => {
  const [sortOrder, setSortOrder] = useState(null);

  return (
    <View>
      <Text>WE ARE THE FILTERS</Text>
      <Sort setSortOrder={setSortOrder} />
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
