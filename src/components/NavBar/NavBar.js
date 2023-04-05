import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={'NavBar'}>
            <div className={'wrapperNavBar'}>
                <h3>Menu</h3>
                <NavLink className={'item'} to="/">Posts</NavLink>
                <NavLink className={'item'} to="/create">Create</NavLink>
                <NavLink className={'item'} to="/users">Users</NavLink>
            </div>
        </div>
    )
}

export default NavBar;