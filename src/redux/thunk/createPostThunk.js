import { API } from '../../api/api';
import { createPost } from '../actions/createPostActions';



export const createPostThunkCreator = (dataPost) => {
    return (dispatch) => {
        API.createPost(dataPost).then(response => {
            const isCreate = response.isCreate;
            dispatch(createPost(isCreate));
        })
    }
}