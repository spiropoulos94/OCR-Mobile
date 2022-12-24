import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {pageStyles} from '../styles/pageStyles';
import {
  convertTimestampToDate,
  formatDistanceBetweenDates,
  getExpStatusFromDate,
} from '../utils/date';

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
  filterBtn: {
    marginLeft: 'auto',
  },
});

const ProductCard = ({product}) => {
  let status = getExpStatusFromDate(product.expDateTs);

  console.log({status});

  return (
    <View style={styles.productCard}>
      <View style={styles.productCardTop}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <View style={[styles.expStatus, {backgroundColor: status}]} />
      </View>
      <View style={styles.productCardBottom}>
        <Text style={styles.expDate}>
          {convertTimestampToDate(product.expDateTs)}
        </Text>
        <Text style={styles.humanExplainedDate}>
          {' '}
          {formatDistanceBetweenDates(
            product.expDateTs,
            new Date().getTime(),
          )}{' '}
        </Text>
      </View>
    </View>
  );
};

const FridgeScreen = ({products}) => {
  return (
    <ScrollView style={pageStyles.containerScroll}>
      <View style={styles.filterBtn} title="Filter">
        <Button title="Filter" />
      </View>
      {products.map((p, index) => (
        <ProductCard key={`${p}-${index}`} product={p} />
      ))}
    </ScrollView>
  );
};

export default FridgeScreen;
