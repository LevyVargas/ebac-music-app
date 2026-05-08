import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import songsReducer from "./libraryReducer";

const store = createStore(songsReducer);

export default store;