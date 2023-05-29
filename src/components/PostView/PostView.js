import React from "react";
import styles from './PostView.module.css';
import PostViewAddCommentForm from "./Comments/PostViewAddCommentForm";
import PostComments from "./Comments/PostComments";
import Post from "../Post/Post";

const PostView = (props) => {
    
    return (
        <div className={styles.PostWrapper}>
            <Post refIS={null} index={null} post={props.post} sendScore={props.sendScore} />
            <PostComments comments={props.post.comments} />
            <PostViewAddCommentForm addComment={props.addComment} />
        </div>
    )
}

export default PostView;