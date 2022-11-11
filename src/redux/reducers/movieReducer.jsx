import {createSlice} from '@reduxjs/toolkit';

let initialState ={
    popularMovies : {},
    topRatedMovies :{},
    upComingMovies:{},
    loading : true,
};

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers: {
        getAllMovies(state, action) {
           
            state.popularMovies = action.payload.popularMoviesData;
            state.topRatedMovies = action.payload.topRatedMoviesdData;
            state.upComingMovies = action.payload.upComingMoviesData;
            state.loading = false;
            
        },
        getMoviesRequest(state, action) {
            state.loading = true;
        },
        getMoviesFailure(state, action) {
            state.loading = false;
        }
    }
});
export const movieActions = movieSlice.actions; 
export default movieSlice.reducer;