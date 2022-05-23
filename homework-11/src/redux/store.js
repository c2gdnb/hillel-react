import { combineReducers } from "redux";
import todos from "./slices/todos";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todos,
});

export default configureStore({
  reducer: rootReducer,
});
