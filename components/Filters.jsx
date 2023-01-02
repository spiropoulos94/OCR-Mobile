import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// contexts
import {ProductsContext} from '../contexts/products.context';
import CustomButton from './Button';
import {Divider, CheckBox} from '@rneui/themed';
// utils
import {SortProducts} from '../utils/filters';

const SORT_OPTIONS = [
  {
    value: 'AddedDateAsc',
    label: 'Added date most recent first',
    enabled: true,
  },
  {
    value: 'AddedDateDesc',
    label: 'Added date oldest first',
    enabled: false,
  },
  {
    value: 'ExpDateAsc',
    label: 'Expiry date soonest to latest',
    enabled: false,
  },
  {
    value: 'ExpDateDesc',
    label: 'Expiry date latest to soonest',
    enabled: false,
  },
];

const Sort = ({setSortOrder}) => {
  const [sortOptions, setSortOptions] = useState(SORT_OPTIONS);

  useEffect(() => {
    setSortOrder(sortOptions.find(o => o.enabled == true).value);
  }, [sortOptions]);

  const handlePress = option => {
    let newSortOptions = sortOptions.map(o => {
      if (o.value === option.value) {
        o.enabled = true;
      } else {
        o.enabled = false;
      }
      return o;
    });
    setSortOptions(newSortOptions);
  };

  return (
    <View style={{marginBottom: 15}}>
      <Text style={styles.filterLabel}>Sort By</Text>
      {sortOptions.map(o => (
        <View key={o.value}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{o.label}</Text>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => handlePress(o)}
              checked={o.enabled}
            />
          </View>
          <Divider />
        </View>
      ))}
    </View>
  );
};

const Filters = ({setFilteredProducts, products, setShowFilters}) => {
  const [sortOrder, setSortOrder] = useState(null);

  const closeModal = () => {
    setShowFilters(false);
  };

  const applyFilters = () => {
    alert('Filters applied!');
    let sortedProducts = SortProducts(sortOrder, products);
    console.log({sortedProducts});
    setFilteredProducts(sortedProducts);
    closeModal();
  };

  return (
    <View>
      <Text>{sortOrder}</Text>
      <Sort setSortOrder={setSortOrder} />
      <CustomButton
        style={{marginTop: 15}}
        title={'APPLY'}
        clickFN={() => {
          applyFilters();
          // console.log('FIlters applied!!');
          // let newProducts = products.filter(p => p.name == 'Milk');
          // console.log(newProducts);
          // setFilteredProducts(newProducts);
        }}
      />
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  filterLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
