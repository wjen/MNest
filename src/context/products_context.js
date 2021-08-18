import React, { useContext, createContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';
const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

// shortcut for using context
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
