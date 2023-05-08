import {SET_POSTS, SET_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING, SET_NEW_RATING_POST, LOAD_NEW_POSTS} from './actionTypes';

export const setPosts = (posts) => ({type: SET_POSTS, posts: posts})
export const loadNewPosts = (posts) => ({type: LOAD_NEW_POSTS, posts: posts})
export const setCount = (count) => ({type: SET_COUNT, count: count})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const setNewRatingPost = (postId, newRating) => ({type: SET_NEW_RATING_POST, postId, newRating})
