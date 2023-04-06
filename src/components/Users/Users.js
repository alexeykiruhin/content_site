import React from "react";
import './Users.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <div className={'Users'}>
            {props.users.map(user => <div key={user.userId} className={'wrapperUser'}>
                <NavLink to={`/user/${user.userId}`}>
                    <div className={'avatar'}>
                        <img src={user.img} alt="no ava"/>
                    </div>
                </NavLink>
                <NavLink to={`/user/${user.userId}`}>
                    <div className={'nameUser'}>
                        {user.nameUser}
                    </div>
                </NavLink>
            </div>)}
        </div>
    )
}

export default Users