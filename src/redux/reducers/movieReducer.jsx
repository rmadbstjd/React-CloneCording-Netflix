import {createSlice} from '@reduxjs/toolkit';

let initialState ={
    popularMovies : {},
    topRatedMovies :{},
    upComingMovies:{}
};

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers: {
        getAllMovies(state, action) {
           
            state.popularMovies = action.payload.popularMoviesData;
            state.topRatedMovies = action.payload.topRatedMoviesdData;
            state.upComingMovies = action.payload.upComingMoviesData;
            
        }
    }
});
export const movieActions = movieSlice.actions; 
export default movieSlice.reducer;