import {SET_USER} from "../actions/actionTypes";

let initialState = {
    userId: null,
    username: '',
    img: '',
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
                postsCount: action.postsCount,
                rating: action.rating,
                posts: [...action.posts]
            }
        default:
            return state;
    }
}

export default usersReducer;