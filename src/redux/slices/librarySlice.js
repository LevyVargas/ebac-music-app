import { createSlice } from "@reduxjs/toolkit"

const librarySlice = createSlice({
    name: 'library',
    initialState: {
        library: [],
    },
    reducers: {
        addSong: (state, action) => {
            const exists = state.library.find(song => song.id === action.payload.id);
            if (!exists) {
                state.library.push(action.payload);
            }
        },
        removeSong: (state, action) => {
            state.library = state.library.filter(lib => lib.id !== action.payload);
        }
    }
})

export const { addSong, removeSong } = librarySlice.actions;

const { reducer: libraryReducer} = librarySlice;
export default libraryReducer;