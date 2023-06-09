import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'NavBar'}>
            <div className={'wrapperNavBar'}>
                <div className={'menuIcon'}>
                    <div className={'menuIconItem'}></div>
                    <div className={'menuIconItem'}></div>
                    <div className={'menuIconItem'}></div>
                </div>
                <NavLink className={'item'} to="/">Home</NavLink>
                <NavLink className={'item'} to="/users">Rating</NavLink>
                <NavLink className={'item'} to="/create">Create</NavLink>
                <NavLink className={'item'} to="/tag-search">Search</NavLink>
            </div>
        </div>
    )
}

export default NavBar;