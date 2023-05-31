import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostComment from "./PostComment";
import { useParams } from "react-router-dom";
import {getCommentsThunkCreator} from '../../../redux/thunk/postViewThunk';


const PostComments = props => {

    const addCom = useSelector(state => state.postView.addCom)

    const dispatch = useDispatch();
    let paramPostId = useParams();

    const handleEdit = (idComment) => {
        console.log(idComment);
    }


    // тут дёргаем подгрузку комментов передавая айди поста paramPostId.postId
    useEffect(() => {
        dispatch(getCommentsThunkCreator(paramPostId.postId));
    }, [paramPostId.postId, addCom])

    return (
        props.comments.map((comment, index) => <PostComment key={index} comment={comment} handleEdit={handleEdit}/>)
        // < PostComment />
    )
}

export default PostComments;