import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import reducer from '../reducers/cart_reducer';
import { ADD_TO_CART } from '../actions';
const CartContext = createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 499,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = ({ id, color, amount, product }) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
