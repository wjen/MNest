import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { useProductsContext } from './products_context';
import { LOAD_PRODUCTS } from '../actions';
import reducer from '../reducers/filter_reducer';
const FilterContext = createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: false,
};
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {' '}
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
