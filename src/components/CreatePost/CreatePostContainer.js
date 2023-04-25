import React from "react";
// import CreatePost from "./CreatePost";
import CreatePostForm from "./CreatePostForm";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { useDispatch, useSelector } from "react-redux";
import {createPostThunkCreator} from '../../redux/thunk/createPostThunk';


const CreatePostContainer = () => {

    const userId = useSelector((store) => store.auth.userId);
    const isCreate = useSelector((store) => store.createPostPage.isCreate);
    
    const dispatch = useDispatch();

    const createPost = (postText) => {
        dispatch(createPostThunkCreator(postText))
    }

    return (
        <CreatePostForm userId={userId} createPost={createPost} isCreate={isCreate}/>
    )
}


const CreatePostWithRedirect = withAuthRedirect(CreatePostContainer)

export default CreatePostWithRedirect;