import authSlice from "./auth.slice";
import cartsSlice from "./carts.slice";
import categorySlice from "./category.slice";
import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./orders.slice";
import productsSlice from "./products.slice";
import userSlice from "./user.slice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    orders: ordersSlice,
    cart: cartsSlice,
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
