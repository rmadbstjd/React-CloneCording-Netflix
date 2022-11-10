import React from 'react';
import styles from './NavbarItem.module.css';
import {useNavigate} from 'react-router-dom';
const NavbarItem = ({item,address}) => {
    const navigate = useNavigate();
    
    const goToLink = () => {
        navigate(`${address}`);
    }
    return (
        <div className={styles.item} onClick={goToLink}>
            <p className={styles.itemName}>{item}</p>
        </div>
    );
};

export default NavbarItem;