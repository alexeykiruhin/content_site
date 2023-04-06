import React from "react";
import './Post.css';

const Post = (props) => {
    return (
        <div className={'Post'}>
            <div className={'postNameUser'}>
                {/*добавить ссылку на профиль*/}
                <div className={'postAvatar'}>
                    <img src='https://randomuser.me/api/portraits/women/55.jpg' alt="no ava"/>
                </div>
                <div className={'postNameUser'}>
                    {props.post.nameUser}
                </div>
            </div>
            <div className={'postText'}>{props.post.textPost}</div>
        </div>
    )
}

export default Post;