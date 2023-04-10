import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'NavBar'}>
            <div className={'wrapperNavBar'}>
                <h3>Menu</h3>
                <NavLink className={'item'} to="/">Home</NavLink>
                <NavLink className={'item'} to="/users">Users</NavLink>
                <NavLink className={'item'} to="/create">Create</NavLink>
            </div>
        </div>
    )
}

export default NavBar;