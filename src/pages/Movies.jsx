import React, {useState,useEffect} from 'react';
import { movieAction } from './../redux/actions/movieAction';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Movies.module.css';
import MovieCard from '../components/MovieCard';
import  Dropdown  from '../components/Dropdown';
import {ClipLoader} from 'react-spinners';
import {AiOutlineArrowRight,AiOutlineArrowDown} from 'react-icons/ai';

const Movies = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies,loading,upComingMovies,searchMovies,searched} = useSelector((state) => state.movie);
    const [drop,setDrop] = useState(false);
    const [selected, setSelected] = useState('Popularlity');
   
    
    if(loading === true) {
        return <ClipLoader color="#fffff" loading={loading} size={150}/>
    }
    
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                    <div className={styles.leftBox}>
                        <div className={styles.filter} onClick={() =>{setDrop((prev) =>!prev)}}>
                            Sort by {selected}
                            {drop===false?<AiOutlineArrowRight className={styles.rightArrow}/>:<AiOutlineArrowDown className={styles.rightArrow}/>}
                        </div>
                        { drop && <Dropdown selected={selected}setSelected={setSelected}></Dropdown>}
                        <div className={styles.filter}>
                            Filter
                            
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        {searched===true?searchMovies.results  && searchMovies.results.map((item) => (<MovieCard item={item} check={"2"}></MovieCard>))
                        :selected==='Popularlity'?popularMovies.results.map((item) => (<MovieCard item={item} check={"2"}></MovieCard>)):selected==='Vote'?topRatedMovies.results.map((item) => (<MovieCard item={item} check={"2"}></MovieCard>)):upComingMovies.results.map((item) => (<MovieCard item={item} check={"2"}></MovieCard>))}
    
                        </div>
                        
            </div>
            
        </div>
    );
};

export default Movies;