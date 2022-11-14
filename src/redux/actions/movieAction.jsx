import api from '../api';
import { movieActions } from './../reducers/movieReducer';

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch, getState) => {
        try{
            dispatch(movieActions.getMoviesRequest());
            const popularMovieApi =  api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedMovieApi = api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upComingMovieApi = api.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            const genreApi = api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);
            
            let [popularMovies, topRatedMovies, upComingMovies,genreList] = await Promise.all([popularMovieApi,topRatedMovieApi,upComingMovieApi,genreApi]);
            let [popularMoviesData, topRatedMoviesData, upComingMoviesData,genreListData] = [popularMovies.data,topRatedMovies.data,upComingMovies.data,genreList.data.genres];
            
            dispatch(movieActions.getAllMovies({popularMoviesData,topRatedMoviesData,upComingMoviesData,genreListData}));
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
            let [movieDetail,movieReviews,movieSimilar]= await Promise.all([movieDetailApi,movieReviewsApi,movieSimilarApi]);
            
            let [movieDetailData, movieReviewsData,movieSimilarData] = [movieDetail.data, movieReviews.data, movieSimilar.data];
            console.log("similar",movieSimilar.data);
            dispatch(movieActions.getMovieDetail({movieDetailData, movieReviewsData, movieSimilarData}));
        }
        catch(error) {

        };
    };
}
export const movieAction ={
    getMovies,getMovieDetail
};

 