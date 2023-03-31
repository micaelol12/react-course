import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { show: false, notification: null },
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    showNotification(state, { payload }) {
      state.notification = {
        status: payload.status,
        title: payload.title,
        message: payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
