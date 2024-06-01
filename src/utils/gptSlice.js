import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPtSearch: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGPtSearch = !state.showGPtSearch;
        }
    }
})

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;