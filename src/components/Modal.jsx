import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Modal.module.css';
import YouTube from 'react-youtube';
import {IoIosCloseCircle} from 'react-icons/io';
const Modal = ({setModalOpen}) => {
    const {movieId} = useSelector((state) => state.movie);
   
    return (
        <div className={styles.container}>
           <div className={styles.x} onClick={() =>{setModalOpen((prev) =>!prev)}}><IoIosCloseCircle color="red"size={20}/></div>
           <YouTube className={styles.youtube}
            videoId = {movieId.results[0].key}
            opts={{
                width: "1024",
                height: "570",
                playerVars: {
                  autoplay: 1, //자동재생 O
                  rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                },
              }}>

           </YouTube>
        </div>
    );
};

export default Modal;