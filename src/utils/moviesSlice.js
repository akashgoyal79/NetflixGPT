import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcommingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcommingMovies: (state,action) =>{
            state.upcommingMovies = action.payload;
        }
    }

})

export const{addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcommingMovies, addTopRatedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;