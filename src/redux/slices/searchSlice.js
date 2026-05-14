import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSongs = createAsyncThunk("search/fetchSongs", async (searchTerm) => {
    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`);
    return response.data.album || [];
});

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        resetResults: (state) => {
            state.results = [];
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                console.log("pending", action);
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
                console.log("fulfilled", action)
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.log("rejected", action);
            });
    }

});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;