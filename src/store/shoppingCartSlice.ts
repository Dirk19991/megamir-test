import { SortedGood } from './../utils/goodsSorter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ShoppingCart {
  items: {
    [item: string]: {
      quantity: number;
      price: number;
    };
  };
}

const initialState: ShoppingCart = {
  items: {},
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<SortedGood>) {
      const { title, price } = action.payload;
      if (!state.items[title]) {
        state.items[title] = {
          quantity: 1,
          price: price,
        };
      } else {
        state.items[title].quantity += 1;
      }
    },
    removeFromCart(state, action: PayloadAction<SortedGood>) {
      const { title, price } = action.payload;
      console.log(state.items[title].quantity);
      state.items[title].quantity -= 1;
      console.log(state.items[title].quantity);
    },
  },
});

export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
