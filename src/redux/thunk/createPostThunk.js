import { API } from '../../api/api';
import { createPost } from '../actions/createPostActions';
import { delPost } from '../actions/userActions';



export const createPostThunkCreator = (dataPost) => {
    return (dispatch) => {
        API.createPost(dataPost).then(response => {
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