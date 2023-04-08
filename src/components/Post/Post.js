import React from "react";
import './Post.css';
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return (
        <div className={'Post'}>
            <div className={'postNameUser'}>
                <NavLink to={`/user/${props.post.author.id}`}>
                    <div className={'postAvatar'}>
                        <img src={props.post.author.img} alt="no ava"/>
                    </div>
                </NavLink>
                <NavLink to={`/user/${props.post.author.id}`}>
                    <div className={'postNameUser'}>
                        {props.post.author.username}
                    </div>
                </NavLink>
            </div>
            <div className={'postText'}>{props.post.text}</div>
        </div>
    )
}

export default Post;