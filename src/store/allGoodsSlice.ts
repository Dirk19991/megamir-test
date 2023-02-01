import { SortedGoods } from './../utils/goodsSorter';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { goodsSorter } from '../utils/goodsSorter';

interface AllGoods {
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected';
  goods: SortedGoods | null;
}

export const fetchGoods = createAsyncThunk('allGoods/fetchGoods', async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const allGoods = await response.json();
    return allGoods;
  } catch (error: any) {
    throw error;
  }
});

const initialState: AllGoods = {
  status: 'idle',
  goods: null,
};

const allGoodsSlice = createSlice({
  name: 'allGoods',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGoods.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      const goods = action.payload;
      state.goods = goodsSorter(goods);
    });

    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.status = 'rejected';
      console.log(action.payload);
    });
  },
});

export default allGoodsSlice.reducer;
