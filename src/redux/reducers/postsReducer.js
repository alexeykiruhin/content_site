import { SET_POSTS, SET_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING, SET_NEW_RATING_POST } from '../actions/actionTypes';

let initialState = {
    posts: [],
    pageSize: 4,
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
            // назодим индекс поста по его айди
            const postIndex = state.posts.findIndex((p) => {
                return p.id === action.postId
            })
            // обновляем найденный пост
            const updatedPost = {
                ...state.posts[postIndex],
                rating: action.newRating
            };
            // обновляем массив постов по частям
            const updatedPosts = [
                ...state.posts.slice(0, postIndex),
                updatedPost,
                ...state.posts.slice(postIndex + 1)
            ];
            return {
                ...state,
                posts: updatedPosts
            }
        default:
            return state;
    }
}

export default postsReducer;