import React from 'react';
import styles from './MovieCard.module.css';
import {Badge} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai';
import {BsFillPeopleFill} from 'react-icons/bs';
const MovieCard = ({item,check}) => {
  
    const navigate = useNavigate();
    const {genreList} = useSelector((state) => state.movie);
    const goToDetail = (id) => {
        navigate(`/Movies/${id}`);
    }
    if(check ==="1"){
    return (
        <div onClick={() =>goToDetail(item.id)}className={styles.card1}style={{backgroundImage : "url(" +`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"}}>
                <div className={styles.overay}>
                    <h1>{item.title}</h1>
                    <div>{item.genre_ids.map((id) => <Badge bg="danger">{genreList.find(item => item.id ===id).name}</Badge>)}</div>
                    <div>
                    <div><AiFillStar className={styles.star}/>{item.vote_average} <BsFillPeopleFill className={styles.star}/>{item.popularity}{item.adult===false?<p className={styles.adult}> Under18</p>:null}</div>
                    </div>  
                </div>
              
        </div>
    );
    }
    else {
        return(
            <div onClick={() =>goToDetail(item.id)}className={styles.card2}style={{backgroundImage: "url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`+")"}}>
                <div>
                    <h1>{item.title}</h1>
                    <div>{item.genre_ids.map((id) => <Badge bg="danger">{genreList.find(item => item.id ===id).name}</Badge>)}</div>
                    <div>
                    <div><AiFillStar className={styles.star}/>{item.vote_average} <BsFillPeopleFill className={styles.star}/>{item.popularity}{item.adult===false?<p className={styles.adult}> Under18</p>:null}</div>
                        
                    </div>  
                </div>              
            </div>

            
        )
    }
};

export default MovieCard;