import api from '../api';
import { movieActions } from './../reducers/movieReducer';

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch, getState) => {
        
        const popularMovieApi =  api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedMovieApi = api.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingMovieApi = api.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([popularMovieApi,topRatedMovieApi,upComingMovieApi]);
        let [popularMoviesData, topRatedMoviesData, upComingMoviesData] = [popularMovies.data,topRatedMovies.data,upComingMovies.data];
        
        dispatch(movieActions.getAllMovies({popularMoviesData,topRatedMoviesData,upComingMoviesData}));
        
    };
}

export const movieAction ={
    getMovies
};

 