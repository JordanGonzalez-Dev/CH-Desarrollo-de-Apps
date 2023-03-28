import { applyMiddleware, combineReducers, createStore } from "redux";

import CommunityReducer from "./reducers/community.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  community: CommunityReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
