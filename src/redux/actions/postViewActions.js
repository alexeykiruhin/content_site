import { SET_POST_VIEW } from "./actionTypes"

export const setPostView = (postId, rating, text, username, img, authorId) =>
    ({type: SET_POST_VIEW, postId, rating, text, username, img, authorId})