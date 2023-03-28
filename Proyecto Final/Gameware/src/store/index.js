import { applyMiddleware, combineReducers, createStore } from "redux";

import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/products.reducer";
import ordersReducer from "./reducers/orders.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductsReducer,
  cart: CartReducer,
  orders: ordersReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
