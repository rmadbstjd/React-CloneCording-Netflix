import React from 'react';
import styles from './NavbarItem.module.css';
const NavbarItem = ({item}) => {
    return (
        <div className={styles.item}>
            <p className={styles.itemName}>{item}</p>
        </div>
    );
};

export default NavbarItem;