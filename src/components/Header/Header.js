import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {

    return (
        <div className={'Header'}>
            <div className={'login'}>
                {props.isAuth ?
                    <div className={'loginWrap'}>
                        <NavLink to={'/user/' + props.id}>
                            {/* <NavLink to={'/user'}> */}
                            <div className={'info'}>
                                <img src={props.img} alt="no ava" />
                                {props.username}
                            </div>
                        </NavLink>
                        <div className={'logout'} onClick={props.logout}>
                            Logout
                        </div>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
            <NavLink className={'logo'} to="/">Contentable</NavLink>
        </div>
    )
}

export default Header;