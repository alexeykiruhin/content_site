import {SET_USER, UPD_STATUS_TEXT} from "../actions/actionTypes";

let initialState = {
    isMe: false,
    userId: null,
    username: '',
    img: '',
    statusText: '',
    postsCount: 0,
    rating: 0,
    plus: 0,
    minus: 0,
    subscribers: 0,
    posts: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isMe: action.isMe,
                userId: action.userId,
                username: action.username,
                img: action.img,
                statusText: action.statusText,
                postsCount: action.postsCount,
                rating: action.rating,
                plus: action.plus,
                minus: action.minus,
                subscribers: action.subscribers,
                posts: [...action.posts]
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

export default userReducer;