const SET_POSTS = 'SET_POSTS';
const SET_COUNT = 'SET_COUNT';

let initialState = {
    posts: [],
    pageSize: 2,
    count: 0,
    currentPage: 1
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.count
            }
        default:
            return state;
    }
}

export const setUsers = (posts) => ({type: SET_POSTS, posts: posts})
export const setCount = (count) => ({type: SET_COUNT, count: count})


export default postsReducer;