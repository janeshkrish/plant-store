import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({ ...action.payload, quantity: 1 });
      state.totalItems++;
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    increase(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalItems++;
        state.totalPrice += item.price;
      }
    },
    decrease(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalItems--;
        state.totalPrice -= item.price;
      }
    }
  }
});

export const { addItem, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
