import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    popularMovies: {},
    topRatedMovies:{},
    upComingMovies:{},
    loading : true,
    genreList : [],
    movieDetail : {},
    movieReviews : {},
    movieSimilar : {},
    showBtn : true,
};

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers: {
        getAllMovies(state, action) {
           
            state.popularMovies = action.payload.popularMoviesData;
            state.topRatedMovies = action.payload.topRatedMoviesData;
            state.upComingMovies = action.payload.upComingMoviesData;
            state.genreList = action.payload.genreListData;
            
            state.loading = false;
            
           
        },
        getMoviesRequest(state, action) {
            state.loading = true;
        },
        getMoviesFailure(state, action) {
            state.loading = false;
        },
        getMovieDetail(state, action) {
            state.movieDetail = action.payload.movieDetailData;
            state.movieReviews = action.payload.movieReviewsData;
            state.movieSimilar = action.payload.movieSimilarData;
        }
    }
});

export const movieActions = movieSlice.actions; 
export default movieSlice.reducer;