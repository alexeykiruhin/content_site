import { API } from '../../api/api';
import { createPost } from '../actions/createPostActions';
import { delPost, editPost } from '../actions/userActions';



export const createPostThunkCreator = (dataPost, tags) => {
    return (dispatch) => {
        API.Post.createPost(dataPost, tags).then(response => {
            const isCreate = response.isCreate;
            dispatch(createPost(isCreate));
        })
    }
}

export const delPostThunkCreator = (postId) => {
    return (dispatch) => {
        API.Post.delPost(postId).then(response => {
            dispatch(delPost(postId));
        })
    }
}

export const editPostThunkCreator = (postId, newPostText) => {
    return (dispatch) => {
        API.Post.editPost(postId, newPostText).then(response => {
            dispatch(editPost(postId, newPostText));
        })
    }
}