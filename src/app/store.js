import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../redux/slices/librarySlice";
import searchReducer from "../redux/slices/searchSlice";
import songDetailsReducer from "../redux/slices/songDetailsSlice";

const store = configureStore({
    reducer: {
        library: libraryReducer,
        search: searchReducer,
        songDetails: songDetailsReducer,
    }
});

export default store;