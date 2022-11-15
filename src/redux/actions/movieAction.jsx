import api from '../api';
import { movieActions } from './../reducers/movieReducer';
//https://api.themoviedb.org/3/search/movie?api_key=eebdcdc144943b1db8e1f2c530ac9812&language=en-US&page=1&include_adult=false&query=avengers
const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch, getState) => {
        try{
            dispatch(movieActions.getMoviesRequest());
            const popularMovieApi =  api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedMovieApi = api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upComingMovieApi = api.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            const genreApi = api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);
            const latestMovieApi = api.get(`movie/latest?api_key=${API_KEY}&language=en-US`);
           
            let [popularMovies, topRatedMovies, upComingMovies,genreList,latestMovies] = await Promise.all([popularMovieApi,topRatedMovieApi,upComingMovieApi,genreApi,latestMovieApi]);
          
            let [popularMoviesData, topRatedMoviesData, upComingMoviesData,genreListData,latestMoviesData] = [popularMovies.data,topRatedMovies.data,upComingMovies.data,genreList.data.genres,latestMovies.data];
            
            dispatch(movieActions.getAllMovies({popularMoviesData,topRatedMoviesData,upComingMoviesData,genreListData,latestMoviesData}));
        }catch(error) {
            dispatch(movieActions.getMoviesFailure());
        }

        
    };
}
function getMovieDetail(id) {
    return async(dispatch, getState) => {
        try {
            
            const movieDetailApi =  api.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieReviewsApi = api.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
            const movieSimilarApi = api.get(`movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
            const movieIdApi = api.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            let [movieDetail,movieReviews,movieSimilar,movieId]= await Promise.all([movieDetailApi,movieReviewsApi,movieSimilarApi,movieIdApi]);
           
            let [movieDetailData, movieReviewsData,movieSimilarData,movieIdData] = [movieDetail.data, movieReviews.data, movieSimilar.data,movieId.data];
            
            dispatch(movieActions.getMovieDetail({movieDetailData, movieReviewsData, movieSimilarData,movieIdData}));
        }
        catch(error) {

        };
    };
}
function searchMovie(name) {
    return async(dispatch, getState) => {
        try {
            const searchMovies = await api.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`);
           
            let searchMoviesData = searchMovies.data;
            dispatch(movieActions.searchMovies({searchMoviesData}));

        }
        catch(error) {

        }
    }
}
function resetSearch() {
    return async(dispatch,getState) => {
        try {
            dispatch(movieActions.resetSearch());
        }
        catch(error) {

        }
    }
}
function searched(searched) {
    return async(dispatch,getState) => {
        try{
            console.log("무비액션",searched);
            dispatch(movieActions.searched({searched}));
        }
        catch(error) {

        }
    }
}
export const movieAction ={
    getMovies,getMovieDetail,searchMovie,resetSearch,searched
};

 