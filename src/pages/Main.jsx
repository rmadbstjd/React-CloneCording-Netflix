import React,{useEffect} from 'react';
import { movieAction } from './../redux/actions/movieAction';
import {useDispatch} from 'react-redux';
const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.getMovies());
    },[])
    return (
        <div>
            메인 페이지
        </div>
    );
};

export default Main;