const SET_POSTS = 'SET_POSTS';

let initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}

export const setUsers = (posts) => ({type: SET_POSTS, posts: posts})


export default postsReducer;