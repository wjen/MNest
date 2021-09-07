import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM } from '../actions';

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, color, product } = action.payload;
    const item = state.cart.find((i) => i.id === id + color);

    if (item) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        amount,
        color,
        image: product.images[0].url,
        name: product.name,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_ITEM) {
    const id = action.payload;
    const updatedCart = state.cart.filter((product) => product.id !== id);
    return { ...state, cart: updatedCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
  throw new Error(`No matching action type - ${action.type}`);
};

export default reducer;
