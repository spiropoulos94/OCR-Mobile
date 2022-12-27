import {createContext, useState} from 'react';

// actual value you weant to access

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
  filteredProducts: [],
  setFilteredProducts: () => null,
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([
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
  ]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const value = {products, setProducts, filteredProducts, setFilteredProducts};

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
