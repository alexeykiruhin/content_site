import React from "react";
import style from './PostComment.module.css';

const PostComment = props => {
    return (
        <div className={style.comment}>{props.comment.comment_text}</div>
    )
}

export default PostComment;