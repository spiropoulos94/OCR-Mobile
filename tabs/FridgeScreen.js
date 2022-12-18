import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

import {convertTimestampToDate} from '../utils/date';

const styles = StyleSheet.create({
  productCard: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  productCardTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productCardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  expStatus: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  expDate: {
    fontSize: 15,
  },
  humanExplainedDate: {
    // fontSize: ,
    fontStyle: 'italic',
    marginLeft: 'auto',
  },
});

const ProductCard = ({product}) => {
  return (
    <View style={styles.productCard}>
      <View style={styles.productCardTop}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <View style={styles.expStatus} />
      </View>
      <View style={styles.productCardBottom}>
        <Text style={styles.expDate}>
          {convertTimestampToDate(product.expDateTs)}
        </Text>
        <Text style={styles.humanExplainedDate}>in 7 days</Text>
      </View>
    </View>
  );
};

const FridgeScreen = ({products}) => {
  return (
    <ScrollView>
      {products.map(p => (
        <ProductCard product={p} />
      ))}
    </ScrollView>
  );
};

export default FridgeScreen;
