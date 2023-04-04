import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={'NavBar'}>
            <h3>Menu</h3>
            <NavLink className={'item'} to="/">Посты</NavLink>
            <NavLink className={'item'} to="/create">Создать пост</NavLink>
        </div>
    )
}

export default NavBar;