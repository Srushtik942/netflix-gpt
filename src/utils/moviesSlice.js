
import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;

        },
        addTrailerVideo:(state,action)=>{
          state.trailerVideo = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;

        },
        addTopratedMovies:(state,action)=>{
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies = action.payload;
        }
    }


});

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopratedMovies,addUpcomingMovies,addTrendingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;