import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";

const rootresucer = combineReducers({ user: Reducer });
const Store = configureStore({
  reducer: rootresucer,
  middleware: [thunk, logger],
});

export default Store;
