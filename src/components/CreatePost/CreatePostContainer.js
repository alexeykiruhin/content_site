import React from "react";
import CreatePost from "./CreatePost";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { useDispatch, useSelector } from "react-redux";
import {createPostThunkCreator} from '../../redux/thunk/createPostThunk';

const CreatePostWithRedirect = withAuthRedirect(CreatePost)

const CreatePostContainer = () => {

    const userId = useSelector((store) => store.auth.userId);
    const isCreate = useSelector((store) => store.createPostPage.isCreate);
    
    const dispatch = useDispatch();

    const handleClick = (userId, dataPost) => {
        console.log('post');
        dispatch(createPostThunkCreator(userId, dataPost))
    }

    return (
        // Не забываем передать isAuth в хок
        <CreatePostWithRedirect userId={userId} handleClick={handleClick} isCreate={isCreate}/>
    )
}


export default CreatePostContainer;