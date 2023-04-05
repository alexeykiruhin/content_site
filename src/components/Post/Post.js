import React from "react";
import './Post.css';

const Post = (props) => {
    return (
        <div className={'Post'}>
            <div className={'postNameUser'}>{props.post.nameUser}</div>
            <div className={'postText'}>{props.post.textPost}</div>
        </div>
    )
}

export default Post;