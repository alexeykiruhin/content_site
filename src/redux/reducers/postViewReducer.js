import {SET_POST_VIEW, UPD_RATING_POST_VIEW} from "../actions/actionTypes";

let initialState = {
    postId: null,
    rating: '',
    text: '',
    username: '',
    img: '',
    authorId: ''
}

const postViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_VIEW:
            return {
                ...state,
                postId: action.postId,
                username: action.username,
                rating: action.rating,
                text: action.text,
                img: action.img,
                authorId: action.authorId
            }
        case UPD_RATING_POST_VIEW:
            return {
                ...state,
                rating: action.rating
            }
        default:
            return state;
    }
}

export default postViewReducer;