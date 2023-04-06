import React from "react";
import './Users.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <div className={'Users'}>
            {props.users.map(user => <div key={user.id} className={'wrapperUser'}>
                <NavLink to={`/user/${user.id}`}>
                    <div className={'avatar'}>
                        <img src={user.img} alt="no ava"/>
                    </div>
                </NavLink>
                <NavLink to={`/user/${user.id}`}>
                    <div className={'nameUser'}>
                        {user.username}
                    </div>
                </NavLink>
            </div>)}
        </div>
    )
}

export default Users