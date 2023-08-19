import {createContext, useState, useEffect, useReducer} from 'react';
import {SortProducts} from '../utils/filters';
import _ from 'lodash';

export const ProductsContext = createContext({
  state: {},
  dispatch: () => null,
  // filteredProducts: [],
  // setFilteredProducts: () => null,
});

let initialState = {
  products: [
    {
      name: 'Milk',
      expDateTs: 1671317840973,
      addedOn: 1671317851535,
    },
    {
      name: 'Cheese',
      expDateTs: 1671317840973,
      addedOn: 1671317851536,
    },
    {
      name: 'Yogurt',
      expDateTs: 1671317840973,
      addedOn: 1671317851537,
    },
  ],
  filteredProducts: null,
  filters: {
    SORT_OPTIONS: [
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
    ],
    SEARCH_TERM: null,
  },
};

const reducer = (state = initialState, action) => {
  state = _.cloneDeep(state);
  const {type, payload} = action;

  const sortOrder = state.filters.SORT_OPTIONS.find(o => o.enabled).value;
  const products = state.products;

  switch (type) {
    case 'ADD_PRODUCT':
      let newProducts = [...state.products, payload.product];
      return Object.assign({}, state, {
        products: newProducts,
        filteredProducts: state.filteredProducts
          ? SortProducts(sortOrder, newProducts)
          : null,
      });
    case 'REMOVE_PRODUCT':
      let arrayWithoutProduct = [
        ...state.products.filter(p => p.addedOn != payload.product.addedOn),
      ];
      return Object.assign({}, state, {
        products: arrayWithoutProduct,
        filteredProducts: state.filteredProducts
          ? SortProducts(sortOrder, arrayWithoutProduct)
          : null,
      });
    case 'FILTER_PRODUCTS':
      return Object.assign({}, state, {
        filteredProducts: SortProducts(sortOrder, products),
      });
    case 'SET_SORT_OPTIONS':
      return Object.assign({}, state, {
        filters: {...state.filters, SORT_OPTIONS: payload.SORT_OPTIONS},
      });
    case 'CLEAR_FILTERS':
      return Object.assign({}, state, {
        filters: _.cloneDeep(initialState.filters),
        filteredProducts: null,
      });
    case 'UPDATE_SEARCH_TERM':
      return Object.assign({}, state, {
        filters: {...state.filters, SEARCH_TERM: payload},
      });
    default:
      return state;
  }
};

export const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{state, dispatch}}>
      {children}
    </ProductsContext.Provider>
  );
};
