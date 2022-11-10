import React from 'react';
import styles from './SearchBar.module.css';
import {BiSearch} from 'react-icons/bi';
const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="search" className={styles.bar}></input>
            <div className={styles.border}><BiSearch size={18} className={styles.item}></BiSearch></div>
        </div>
    );
};

export default SearchBar;