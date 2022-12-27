import {createContext, useState} from 'react';

// actual value you weant to access

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const value = {products, setProducts};

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
