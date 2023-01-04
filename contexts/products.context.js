import {createContext, useState, useEffect, useReducer} from 'react';
import {SortProducts} from '../utils/filters';

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
      addedOn: 1671317851535,
    },
    {
      name: 'Yogurt',
      expDateTs: 1671317840973,
      addedOn: 1671317851535,
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
  },
};

const reducer = (state = initialState, action) => {
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
    case 'FILTER_PRODUCTS':
      console.log('Filter products running', {sortOrder, products});
      return Object.assign({}, state, {
        filteredProducts: SortProducts(sortOrder, products),
      });
    case 'SET_SORT_OPTIONS':
      return Object.assign({}, state, {
        filters: {...state.filters, SORT_OPTIONS: payload.SORT_OPTIONS},
      });
    case 'CLEAR_FILTERS':
      return Object.assign({}, state, {
        filters: initialState.filters,
        filteredProducts: null,
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
