import React,{useState} from 'react';
import styles from './SearchBar.module.css';
import {BiSearch} from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import {movieAction } from '../redux/actions/movieAction';

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const clickChange = (e) => {
        setName(e.target.value);
    }
    const handleChange = (e) => {
        let keyword = e.target.value;
       
        
        if(e.key ==='Enter') {
           dispatch(movieAction.searchMovie(keyword));
           dispatch(movieAction.searched(true));
        }
        
        
    };
    const getSearch = () => {
        dispatch(movieAction.searchMovie(name));
        dispatch(movieAction.searched(true));
    };
    return (
        <div className={styles.container}>
            
            <input type="text" placeholder="search" className={styles.bar}  onChange={(e) =>clickChange(e)}onKeyPress={(e) =>handleChange(e)}></input>
            <div className={styles.border}><BiSearch size={18} className={styles.item} onClick={getSearch}></BiSearch></div>
            
        </div>
    );
};

export default SearchBar;