import { SET_POST_VIEW, UPD_RATING_POST_VIEW, SET_COMMENTS, ADD_COMMENT } from "../actions/actionTypes";

let initialState = {
    id: null,
    rating: { result: '' },
    text: '',
    username: '',
    author: { id: '', img: '' },
    comments: [],
    addCom: '',
    tags: []
}

const postViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_VIEW:
            return {
                ...state,
                id: action.postId,
                username: action.username,
                rating: { result: action.rating },
                text: action.text,
                author: { id: action.authorId, img: action.img },
                tags: action.tags
            }
        case UPD_RATING_POST_VIEW:
            return {
                ...state,
                rating: { result: action.rating },
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: [...action.comments]
            }
        case ADD_COMMENT:
            return {
                ...state,
                addCom: action.addCom
            }
        default:
            return state;
    }
}

export default postViewReducer;