import React, {useState, useContext, useRef, useEffect} from 'react';
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
import {Badge} from '@rneui/themed';

import Drawer from '../Drawer';
import Filters from '../Filters';
import Searchbar from '../Searchbar';
import FloatingButtonWithOptions from '../FloatingButtonWithOptions';

//contexts

import {ProductsContext} from '../../contexts/products.context';

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

const FridgeScreen = () => {
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  const {state, dispatch} = useContext(ProductsContext);

  const {products, filteredProducts, filters} = state;

  const renderProducts = (products, filteredProducts) => {
    let productsToRender = filteredProducts ? filteredProducts : products;

    // for debugging reasons
    // let msg = filteredProducts ? 'filteredProducts' : 'products';
    // alert(`Deixnei : ${msg}`);

    return productsToRender.map((p, index) => (
      <ProductCard key={`${p}-${index}`} product={p} />
    ));
  };

  return (
    <View style={pageStyles.container}>
      <FloatingButtonWithOptions
        floatingOptions={[
          {
            // title: 'Filter',
            onPress: () => setShowFiltersDrawer(true),
            closeAfterCall: false,
            color: '#4C97D9',
            icon: <Icon name="filter" color="white" size={25} />,
          },
          {
            // title: 'Delete',
            onPress: () => null,
            closeAfterCall: false,
            color: '#d9594c',
            icon: <Icon name="trash" color="white" size={25} />,
          },
        ]}
      />
      <Searchbar style={{marginBottom: 15}} products={products} />
      {/* <TouchableOpacity
        style={styles.filterBtn}
        onPress={() => setShowFiltersDrawer(true)}>
        <Icon name="filter" color="white" size={25} />
        {filteredProducts && (
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
            }}>
            <Badge value={1} status="error" />
          </View>
        )}
      </TouchableOpacity> */}
      <ScrollView>{renderProducts(products, filteredProducts)}</ScrollView>
      <Drawer
        // fullheight
        headerFunc={() => dispatch({type: 'CLEAR_FILTERS'})}
        status={showFiltersDrawer}
        setStatus={setShowFiltersDrawer}
        title="Filters">
        <Filters
          products={products}
          setShowFiltersDrawer={setShowFiltersDrawer}
        />
      </Drawer>
    </View>
  );
};

export default FridgeScreen;
