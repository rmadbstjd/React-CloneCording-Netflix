import React from 'react';
import NavbarTop from '../components/NavbarTop';
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;