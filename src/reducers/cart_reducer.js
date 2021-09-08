import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

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
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((product) => {
      if (product.id === id) {
        let tempValue;
        if (value === 'inc') {
          tempValue = product.amount + 1;
          if (tempValue >= product.max) {
            tempValue = product.max;
          }
        } else if (value === 'dec') {
          tempValue = product.amount - 1;
          if (tempValue < 1) {
            tempValue = 1;
          }
        }
        return { ...product, amount: tempValue };
      } else {
        return product;
      }
    });
    // removes item from cart if quantity 0
    // .filter((product) => product.amount > 0);

    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No matching action type - ${action.type}`);
};

export default reducer;
