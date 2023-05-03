import React from "react";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { postRatingThunkCreator } from '../../redux/thunk/postsThunk';

const PostContainer = (props) => {

    const dispatch = useDispatch();
    // console.log(`props.index = ${props.index}`);
    const sendScore = (postId, score) => {
        // console.log(postId);
        // console.log(score);
        dispatch(postRatingThunkCreator(postId, score))
    }

    return (
        <Post index={props.index} post={props.post} sendScore={sendScore} />
    )
}

export default PostContainer;