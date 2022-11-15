import React,{useEffect} from 'react';
import styles from './Dropdown.module.css';
import {useDispatch} from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
const Dropdown = ({selected,setSelected}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.resetSearch());
    },[selected]);
    const handleClick = (name) => {
        
        setSelected(name);
        dispatch(movieAction.searched(false));
    };
    return (
        <div>
            <ul>
                <li className={styles.btn} onClick={() =>handleClick('Latest')}>Latest</li>
                <li className={styles.btn} onClick={() =>handleClick('Vote')}>Vote</li>
                <li className={styles.btn} onClick={() => handleClick('Popularlity')}>Popularlity</li>
            </ul>
        </div>
    );
};

export default Dropdown;