import React, {useState, useContext, useEffect, useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// contexts
import {ProductsContext} from '../contexts/products.context';
import CustomButton from './Button';
import {Divider, CheckBox} from '@rneui/themed';
// utils
import {SortProducts} from '../utils/filters';

const SORT_OPTIONS = [
  {
    value: 'AddedDateDesc',
    label: 'Added date oldest first',
    enabled: true,
  },
  {
    value: 'AddedDateAsc',
    label: 'Added date most recent first',
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

const Sort = () => {
  const {state, dispatch} = useContext(ProductsContext);

  const {SORT_OPTIONS} = state.filters;

  const handlePress = option => {
    let newSortOptions = SORT_OPTIONS.map(o => {
      if (o.value === option.value) {
        o.enabled = true;
      } else {
        o.enabled = false;
      }
      return o;
    });

    dispatch({
      type: 'SET_SORT_OPTIONS',
      payload: {
        SORT_OPTIONS: newSortOptions,
      },
    });
  };

  return (
    <View style={{marginBottom: 15}}>
      <Text style={styles.filterLabel}>Sort By</Text>
      {SORT_OPTIONS.map(o => (
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
  const closeModal = () => {
    setShowFilters(false);
  };

  const {state, dispatch} = useContext(ProductsContext);

  const applyFilters = (shouldCloseModal = false) => {
    dispatch({type: 'FILTER_PRODUCTS'});
    if (shouldCloseModal) {
      closeModal();
    }
  };

  return (
    <View>
      <Sort />
      <CustomButton
        style={{marginTop: 15}}
        title={'APPLY'}
        clickFN={() => {
          applyFilters(true);
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
