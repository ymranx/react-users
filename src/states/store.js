import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState";
import reducer from "./reducer";

const middlewares = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
