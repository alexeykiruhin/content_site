import { IS_SUBSCRIBED, SET_USER, UPD_STATUS_TEXT, DEL_POST, EDIT_POST } from "../actions/actionTypes";

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
    isSubs: false,
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
                isSubs: action.isSubs,
                posts: [...action.posts]
            }
        case UPD_STATUS_TEXT:
            return {
                ...state,
                statusText: action.statusText
            }
        case IS_SUBSCRIBED:
            return {
                ...state,
                isSubs: action.isSubs
            }
        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => {
                    if (p[1] === action.postId) {
                        return false;
                    }
                    return true;
                })
            }
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p[1] === action.postId) {
                        p[0] = action.newPostText;
                    }
                    return p
                })
            }
        default:
            return state;
    }
}

export default userReducer;