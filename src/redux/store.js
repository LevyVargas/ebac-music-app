import { createStore } from "redux";
import songsReducer from "./libraryReducer";

const store = createStore(songsReducer);

export default store;