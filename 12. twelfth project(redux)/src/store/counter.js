import { createSlice } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increase(state, { payload }) {
      state.counter += payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
