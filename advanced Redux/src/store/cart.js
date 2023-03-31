import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    replace(state, { payload }) {
      state.totalQuantity = payload.totalQuantity;
      state.items = payload.items;
    },
    add(state, { payload }) {
      state.changed = true;
      state.totalQuantity++;
      const existingItem = state.items.find(
        (item) => item.title === payload.title
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += payload.price;
      } else {
        state.items.push({
          title: payload.title,
          price: payload.price,
          description: payload.description,
          quantity: 1,
          total: payload.price,
        });
      }
    },
    remove(state, { payload }) {
      state.changed = true;
      state.totalQuantity--;
      const existingItem = state.items.find((item) => item.title === payload);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.title !== payload);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
