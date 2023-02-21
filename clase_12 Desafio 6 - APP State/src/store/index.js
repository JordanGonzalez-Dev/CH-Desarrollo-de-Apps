import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import thunk from "redux-thunk";

// import CartReducer from "./reducers/cart.reducer";

// import OrderReducer from "./reducers/order.reducer";
// import ProductReducer from "./reducers/products.reducer";


const RootReducer = combineReducers({
  categories: CategoryReducer,
//   products: ProductReducer,
//   cart: CartReducer,
//   orders: OrderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
