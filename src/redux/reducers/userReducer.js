import {EDIT_STATUS_TEXT, SET_USER, UPD_STATUS_TEXT} from "../actions/actionTypes";

let initialState = {
    userId: null,
    username: '',
    img: '',
    statusText: '',
    isEditStatusText: false,
    postsCount: 0,
    rating: 0,
    posts: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userId: action.userId,
                username: action.username,
                img: action.img,
                statusText: action.statusText,
                postsCount: action.postsCount,
                rating: action.rating,
                posts: [...action.posts]
            }
        case EDIT_STATUS_TEXT:
            return {
                ...state,
                isEditStatusText: action.isEditStatusText
            }
        case UPD_STATUS_TEXT:
            return {
                ...state,
                statusText: action.statusText
            }
        default:
            return state;
    }
}

export default usersReducer;