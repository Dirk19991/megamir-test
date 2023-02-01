import { ShoppingCart } from '../store/shoppingCartSlice';

export function countSum(cart: ShoppingCart) {
  let sum = 0;

  Object.entries(cart.items).forEach((item) => {
    sum += +(item[1].price * item[1].quantity);
  });

  return sum.toFixed(0);
}
