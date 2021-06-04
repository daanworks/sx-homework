import displayReducer from "./displayReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  displayReducer : displayReducer,
});

export default rootReducer;
