import React from "react";
import './Post.css';
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return (
        <div className={'Post'}>
            <div className={'postNameUser'}>
                <NavLink to={`/user/${props.post.userId}`}>
                    <div className={'postAvatar'}>
                        <img src='https://randomuser.me/api/portraits/women/55.jpg' alt="no ava"/>
                    </div>
                </NavLink>
                <NavLink to={`/user/${props.post.userId}`}>
                    <div className={'postNameUser'}>
                        {props.post.nameUser}
                    </div>
                </NavLink>
            </div>
            <div className={'postText'}>{props.post.textPost}</div>
        </div>
    )
}

export default Post;