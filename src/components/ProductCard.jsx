import React, {useContext} from 'react';
import {
  convertTimestampToDate,
  formatDistanceBetweenDates,
  getExpStatusFromDate,
} from '../utils/date';
import {ListItem} from '@rneui/themed';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProductsContext} from '../contexts/products.context';

const ProductCardContent = ({status, product}) => {
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

const ProductCard = ({product}) => {
  let status = getExpStatusFromDate(product.expDateTs);

  const {dispatch} = useContext(ProductsContext);

  const handleDelete = (product, cb) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: {
        product: product,
      },
    });
    cb();
  };

  return (
    <ListItem.Swipeable
      Component={() => <ProductCardContent status={status} product={product} />}
      rightWidth={40}
      leftWidth={50}
      rightContent={reset => (
        <TouchableOpacity
          onPress={() => handleDelete(product, reset)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            color: 'white',
          }}>
          <Icon name="trash" size={30} color="#d9594c" />
        </TouchableOpacity>
      )}
      //   leftContent={reset => (
      //     <TouchableOpacity
      //       onPress={() => handleDelete(product, reset)}
      //       style={{
      //         flex: 1,
      //         justifyContent: 'center',
      //         alignItems: 'flex-start',
      //         color: 'white',
      //       }}>
      //       <Icon name="trash" size={30} color="#d9594c" />
      //     </TouchableOpacity>
      //   )}
    ></ListItem.Swipeable>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  humanExplainedDate: {
    fontStyle: 'italic',
    marginLeft: 'auto',
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
});
