import React,{useEffect} from 'react';
import { movieAction } from './../redux/actions/movieAction';
import {useDispatch, useSelector} from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import {ClipLoader} from 'react-spinners';
import styles from './Main.module.css';
const Main = () => {
    const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.getMovies());
    },[])
    if(loading === true) {
        return <ClipLoader color="#fffff" loading={loading} size={150}/>
    }
    //로딩 스피너 코드를 작성하였기 때문에 밑에 popularMovies.results << 라는 조건부 렌더링을 없애도 된다. 
    return (
        <div className={styles.body}>
            
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