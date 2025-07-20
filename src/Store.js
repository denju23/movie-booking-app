import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ItemsReducer } from "./Reducer/ItemsReducer";

const reducer = combineReducers({
  Items: ItemsReducer,
});
let initialState = {};
const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);
export default Store;
