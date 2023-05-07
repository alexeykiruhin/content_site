import React, {useEffect} from "react";
import PostView from "./PostView";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getCommentsThunkCreator, getPostViewThunkCreator} from '../../redux/thunk/postViewThunk';
import {postRatingThunkCreator} from '../../redux/thunk/postsThunk';

const PostContainer = (props) => {

    // const isMe = useSelector((state) => state.userPage.isMe);

    const post = useSelector(store => store.postView);
    console.log(`post - ${post}`);
    const dispatch = useDispatch();
    let paramPostId = useParams();
    
    useEffect(() => {
        console.log(paramPostId.postId);
        dispatch(getPostViewThunkCreator(paramPostId.postId));
        dispatch(getCommentsThunkCreator(paramPostId.postId));
    }, [paramPostId.postId])

    // console.log(`props.index = ${props.index}`);
    const sendScore = (postId, score) => {
        // console.log(postId);
        // console.log(score);
        dispatch(postRatingThunkCreator(postId, score))
    }

    return (
        <PostView index={props.index} post={post} sendScore={sendScore}/>
    )
}

export default PostContainer;