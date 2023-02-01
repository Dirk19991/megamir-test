import { ShoppingCart } from '../store/shoppingCartSlice';

export function countItems(cart: ShoppingCart) {
  let quantity = 0;

  Object.entries(cart.items).forEach((item) => {
    quantity += item[1].quantity;
  });

  return quantity;
}
