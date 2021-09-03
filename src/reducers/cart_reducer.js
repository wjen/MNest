import { ADD_TO_CART } from '../actions';

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, color, product } = action.payload;
    const item = state.cart.find((i) => i.id === id + color);

    if (item) {
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
    }
  }
  return state;
  throw new Error(`No matching action type - ${action.type}`);
};

export default reducer;
