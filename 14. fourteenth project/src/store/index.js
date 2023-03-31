
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { authActions } from "./authSlice";

const authMiddleware = (store) => (next) => (action) => {
  if (authActions.login.match(action)) {
    localStorage.setItem('token',action.payload.token);
  } else if (authActions.logout.match(action)) {
    localStorage.removeItem('token');
  }
  return next(action);
};

const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)

});
export default store;

