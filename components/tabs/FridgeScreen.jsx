import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {pageStyles} from './../../styles/pageStyles';
import {
  convertTimestampToDate,
  formatDistanceBetweenDates,
  getExpStatusFromDate,
} from '../../utils/date';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Badge, ListItem} from '@rneui/themed';

import Drawer from '../Drawer';
import Filters from '../Filters';
import Searchbar from '../Searchbar';
import ProductCard from '../ProductCard';

//contexts

import {ProductsContext} from '../../contexts/products.context';
import {Divider} from '@rneui/base';

const styles = StyleSheet.create({
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

const FridgeScreen = () => {
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  const {state, dispatch} = useContext(ProductsContext);

  const {products, filteredProducts, filters} = state;

  const {SEARCH_TERM} = filters;

  const renderProducts = (products, filteredProducts) => {
    let productsToRender = filteredProducts ? filteredProducts : products;

    // for debugging reasons
    // let msg = filteredProducts ? 'filteredProducts' : 'products';
    // alert(`Deixnei : ${msg}`);

    if (SEARCH_TERM) {
      productsToRender = productsToRender.filter(p =>
        p.name.toLowerCase().includes(SEARCH_TERM.toLowerCase()),
      );
    }

    return productsToRender;

    // return productsToRender.map((p, index) => (
    //   <ProductCard key={`${p.name}-${index}`} product={p} />
    // ));
  };

  return (
    <View style={pageStyles.container}>
      <Searchbar style={{marginBottom: 15}} products={products} />
      <TouchableOpacity
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
      </TouchableOpacity>
      <FlatList
        alwaysBounceVertical={false}
        data={renderProducts(products, filteredProducts)}
        renderItem={({item}) => {
          return <ProductCard product={item} />;
        }}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
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
