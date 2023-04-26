import {SET_POSTS, SET_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING, SET_NEW_RATING_POST} from '../actions/actionTypes';

let initialState = {
    posts: [],
    pageSize: 2,
    count: 0,
    currentPage: 1,
    isFetching: false
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_NEW_RATING_POST:
            // для обновления рейтинга отдельно, нужно раскукожить объект постс, что бы был явный доступ к рейтингу
            return {
                ...state,
                posts: action.isFetching
            }
        default:
            return state;
    }
}

export default postsReducer;