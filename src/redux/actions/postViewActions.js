import { SET_POST_VIEW, UPD_RATING_POST_VIEW } from "./actionTypes"

export const setPostView = (postId, rating, text, username, img, authorId) =>
    ({type: SET_POST_VIEW, postId, rating, text, username, img, authorId})

export const updRatingPostView = (rating) => ({type: UPD_RATING_POST_VIEW, rating})