import { API } from '../../api/api';
import { createPost } from '../actions/createPostActions';



export const createPostThunkCreator = (userId, dataPost) => {
    return (dispatch) => {
        API.createPost(userId, dataPost).then(response => {
            const isCreate = response.isCreate;
            dispatch(createPost(isCreate));
        })
    }
}