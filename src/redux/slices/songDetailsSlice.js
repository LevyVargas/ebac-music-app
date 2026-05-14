import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbumDetails = createAsyncThunk("songDetails/fetchAlbumDetails", async (id) => {
    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`);
    return response.data.album ? response.data.album[0] : null;
});

const songDetailsSlice = createSlice({
    name: "songDetails",
    initialState: {
        album: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearAlbumDetails: (state) => {
            state.album = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbumDetails.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                console.log("pending", action);
            })
            .addCase(fetchAlbumDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.album = action.payload;
                console.log("fulfilled", action);
            })
            .addCase(fetchAlbumDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.log("rejected", action);
            });
    }
});

export const { clearAlbumDetails } = songDetailsSlice.actions;
export default songDetailsSlice.reducer;