import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toggleReducer from "./toggleReducer";

const reducers = combineReducers({
  counter: counterReducer,
  toggle: toggleReducer,
});

export default reducers;
