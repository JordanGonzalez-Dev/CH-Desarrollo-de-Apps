import { combineReducers, createStore } from "redux";

import CommunityReducer from "./reducers/community.reducer";

const RootReducer = combineReducers({
  community: CommunityReducer,
});

export default createStore(RootReducer);
