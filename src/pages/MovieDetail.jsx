import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { movieAction } from './../redux/actions/movieAction';
import  { useParams } from 'react-router-dom';
import styles from './MovieDetail.module.css';
import {AiFillStar} from 'react-icons/ai';
import {BsFillPeopleFill} from 'react-icons/bs';
import {Badge} from 'react-bootstrap';
const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieDetail,movieReviews} = useSelector((state) => state.movie);
    console.log("잘나오나?",movieDetail);
    console.log("너도",movieReviews);
    useEffect(() => {
        dispatch(movieAction.getMovieDetail(id));
       
    },[]);
    return (
        <div className={styles.body}>
            <div className={styles.containerTop}>
                <div className={styles.img}style={{backgroundImage: "url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`+")"}}></div>
                <div>
                    <div>{ movieDetail.title}</div>
                    <div>{ movieDetail.tagline}</div>
                    <div><AiFillStar/>{movieDetail.vote_average} <BsFillPeopleFill/>{movieDetail.popularity}{movieDetail.adult===false?" Under18":null}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.overview}>
                        <p>{movieDetail.overview}</p>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div>
                    <Badge bg="danger">Budget</Badge>${movieDetail.budget}
                    </div>
                    <div>
                    <Badge bg="danger">Revenue</Badge>${movieDetail.revenue}
                    </div>
                    <div>
                    <Badge bg="danger">Release Date</Badge>${movieDetail.release_date}
                    </div>
                    <div>
                    <Badge bg="danger">RunTime</Badge>{movieDetail.runtime}minutes
                    </div>
                    <hr className={styles.hr}></hr>
                    
                </div>
                
            </div>
            <div className={styles.containerBottom}>
                <div>
                    <button className={styles.reviewBtn}>REVIEWS</button><button className={styles.relatedBtn}>RELATED MOVIES</button>
                </div>
                {movieReviews.results && movieReviews.results.map(item => <div><div>{item.author}</div><div>{item.content}</div></div>)};
                
            </div>            
        </div>
        
    );
};

export default MovieDetail;