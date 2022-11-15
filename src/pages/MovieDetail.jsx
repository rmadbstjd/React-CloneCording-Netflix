import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { movieAction } from './../redux/actions/movieAction';
import  { useParams } from 'react-router-dom';
import styles from './MovieDetail.module.css';
import {AiFillStar} from 'react-icons/ai';
import {BsFillPeopleFill} from 'react-icons/bs';
import {Badge} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from '../components/Modal';


const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieDetail,movieReviews,movieSimilar,genreList} = useSelector((state) => state.movie);
    const [show, setShow] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        dispatch(movieAction.getMovieDetail(id));
       
    },[]);
    
    //<div>{item.genre_ids.map((id) => <Badge bg="danger">{genreList.find(item => item.id ===id).name}</Badge>)}</div>
    return (
        <div className={styles.body}>
            <div className={styles.top}>NETFLIX</div>
            <div className={styles.containerTop}>
                <div className={styles.img}style={{backgroundImage: "url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`+")"}}></div>
                <div>
                    <div>{movieDetail.genres && movieDetail.genres.map((id) => <Badge className={styles.badge} bg="danger">{genreList.find(item =>(id.id===item.id)).name}</Badge>)}</div>
                    <div>{ movieDetail.title}</div>
                    <div>{ movieDetail.tagline}</div>
                    <div><AiFillStar className={styles.star}/>{movieDetail.vote_average} <BsFillPeopleFill className={styles.star}/>{movieDetail.popularity}{movieDetail.adult===false?<p className={styles.adult}> Under18</p>:null}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.overview}>
                        <p>{movieDetail.overview}</p>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div>
                    <Badge className={styles.star} bg="danger">Budget</Badge>${movieDetail.budget}
                    </div>
                    <div>
                    <Badge className={styles.badge} bg="danger">Revenue</Badge>${movieDetail.revenue}
                    </div>
                    <div>
                    <Badge className={styles.badge} bg="danger">Release Date</Badge>${movieDetail.release_date}
                    </div>
                    <div>
                    <Badge className={styles.badge} bg="danger">RunTime</Badge>{movieDetail.runtime}minutes
                    </div>
                    <hr className={styles.hr}></hr>
                    <Button  variant="danger" onClick={() =>{setModalOpen((prev) =>!prev)}}>Watch Trailer</Button>
                    {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
                </div>
                
            </div>
            <div className={styles.btnContainer}>
                    <button className={show?styles.reviewBtn:styles.reviewBtn2} onClick={()=>setShow(true)}>REVIEWS</button>
                    <button className={show===false?styles.relatedBtn:styles.relatedBtn2} onClick={()=>setShow(false)}>SIMILAR MOVIES</button>
            </div>
            
                {
                    show===true?
                    <div className={styles.containerBottom1}>
                        {movieReviews.results && movieReviews.results.map(item => <div><div>{item.author}</div><div>{item.content}</div><hr></hr></div>)}
                    </div>
                    :<div className={styles.containerBottom2}>
                            {movieSimilar && movieSimilar.results.map(item =>(<div className={styles.similarImg}style={{backgroundImage : "url(" +`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}`+")"}}>
                            <div className={styles.overay}>
                                <h1>{item.title}</h1>
                                    <div>{item.genre_ids.map((id) => <Badge className={styles.badge} bg="danger">{genreList.find(item => item.id ===id).name}</Badge>)}</div>
                                    <div>
                                    <span>{item.vote_average}</span>
                                    <span>{item.adult? "청불" : "Under 18"}</span>
                                    </div>  
                            </div>
                    </div>))}
                    </div>
                    
                }
            
            
                     
        </div>
        
    );
};

export default MovieDetail;