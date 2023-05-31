import { SET_POST_VIEW, UPD_RATING_POST_VIEW, SET_COMMENTS, ADD_COMMENT, DEL_COMMENT, EDIT_COMMENT  } from "../actions/actionTypes";

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
        case DEL_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((c) => {
                    if (c['_id'] === action.commentId) {
                        return false;
                    }
                    return true;
                })
            }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map((c) => {
                    if (c['_id'] === action.commentId) {
                        c['comment_text'] = action.newCommentText;
                    }
                    return c
                })
            }
        default:
            return state;
    }
}

export default postViewReducer;