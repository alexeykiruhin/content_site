import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = ({ id, img, isAuth }) => {

    return (
        <div className={'Header'}>
            <div className={'login'}>
                {isAuth ?
                    <div className={'loginWrap'}>
                        <NavLink to={'/user/' + id}>
                            {/* <NavLink to={'/user'}> */}
                            <div className={'info'}>
                                <img src={img} alt="no ava" />
                                {/* {props.username} */}
                            </div>
                        </NavLink>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
            <div className={'logoWrapper'}>
                <NavLink className={'logo'} to="/">Contentable</NavLink>
            </div>
        </div>
    )
}

export default Header;