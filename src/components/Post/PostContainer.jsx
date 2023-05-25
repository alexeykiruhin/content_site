import React from "react";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { postRatingThunkCreator } from '../../redux/thunk/postsThunk';

const PostContainer = (props) => {

    const dispatch = useDispatch();
    const sendScore = (postId, score) => {
        dispatch(postRatingThunkCreator(postId, score))
    }

    return (
        <Post refIS={props.refIS} index={props.index} post={props.post} sendScore={sendScore} />
    )
}

export default PostContainer;