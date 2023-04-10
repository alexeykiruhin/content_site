import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={'Header'}>
            <div className={'login'}>
                {props.isAuth ?
                    <div className={'info'}>
                        <img src={props.img} alt="no ava"/>
                        {props.username}
                    </div>
                    : 'Login'}
            </div>
            <NavLink className={'logo'} to="/">Contentable</NavLink>
        </div>
    )
}

export default Header;