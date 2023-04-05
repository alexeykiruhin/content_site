import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={'Header'}>
            <NavLink className={'logo'} to="/">Contentable</NavLink>
        </div>
    )
}

export default Header;