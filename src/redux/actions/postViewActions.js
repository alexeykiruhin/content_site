import { SET_POST_VIEW, UPD_RATING_POST_VIEW, SET_COMMENTS, ADD_COMMENT } from "./actionTypes"

export const setPostView = (postId, rating, text, username, img, authorId) =>
    ({type: SET_POST_VIEW, postId, rating, text, username, img, authorId})

export const updRatingPostView = (rating) => ({type: UPD_RATING_POST_VIEW, rating})

// установка комментариев в стейт
export const setComments = (comments) => ({type: SET_COMMENTS, comments})
// добавление коммента нужно для релоада комментов
export const addCom = (addCom) => ({type: ADD_COMMENT, addCom})
