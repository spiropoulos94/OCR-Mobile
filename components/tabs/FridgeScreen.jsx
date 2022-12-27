import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {pageStyles} from './../../styles/pageStyles';
import {
  convertTimestampToDate,
  formatDistanceBetweenDates,
  getExpStatusFromDate,
} from '../../utils/date';
import Icon from 'react-native-vector-icons/FontAwesome';

import Drawer from '../Drawer';
import Filters from '../Filters';

const styles = StyleSheet.create({
  productCard: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
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
    fontStyle: 'italic',
    marginLeft: 'auto',
  },
  filterBtn: {
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#31C283',
    position: 'absolute',
    zIndex: 9999,
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'pink',
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
  const [showFilters, setShowFilters] = useState(false);

  return (
    <View style={pageStyles.container}>
      <TouchableOpacity
        style={styles.filterBtn}
        onPress={() => setShowFilters(true)}>
        <Icon name="filter" color="white" size={25} />
      </TouchableOpacity>
      <ScrollView>
        {products.map((p, index) => (
          <ProductCard key={`${p}-${index}`} product={p} />
        ))}
      </ScrollView>
      <Drawer
        // fullheight
        status={showFilters}
        setStatus={setShowFilters}
        title="Filters">
        <Filters />
      </Drawer>
    </View>
  );
};

export default FridgeScreen;
