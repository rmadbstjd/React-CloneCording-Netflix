import React,{useEffect} from 'react';
import { movieAction } from './../redux/actions/movieAction';
import {useDispatch, useSelector} from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
const Main = () => {
    const {popularMovies, topRatedMovies, upComingMovies} = useSelector((state) => state.movie);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.getMovies());
    },[])
    return (
        <div>
            {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
            <h1>Popular Movies</h1>
            <MovieSlide movies={popularMovies}></MovieSlide>
            <h1>Top Rated Movies</h1>
            <MovieSlide movies={topRatedMovies}></MovieSlide>
            <h1>UpComing Movies</h1>
            <MovieSlide movies={upComingMovies}></MovieSlide>
        </div>
    );
};

export default Main;