import { SET_POST_VIEW, UPD_RATING_POST_VIEW, SET_COMMENTS, ADD_COMMENT, DEL_COMMENT, EDIT_COMMENT } from "./actionTypes"

export const setPostView = (postId, rating, text, username, img, authorId, tags) =>
    ({type: SET_POST_VIEW, postId, rating, text, username, img, authorId, tags})

export const updRatingPostView = (rating) => ({type: UPD_RATING_POST_VIEW, rating})

// установка комментариев в стейт
export const setComments = (comments) => ({type: SET_COMMENTS, comments})
// добавление коммента нужно для релоада комментов
export const addCom = (addCom) => ({type: ADD_COMMENT, addCom})
// удаление коммента
export const delCom = (commentId) => ({type: DEL_COMMENT, commentId})
// редактирование коммента
export const editCom = (commentId, newCommentText) => ({type: EDIT_COMMENT, commentId, newCommentText})
