import {IS_SUBSCRIBED, SET_USER, UPD_STATUS_TEXT, DEL_POST, EDIT_POST} from "./actionTypes";

export const setUser = (isMe, userId, username, img, statusText, postsCount, rating, plus, minus, subscribers, isSubs, posts) =>
    ({type: SET_USER, isMe, userId, username, img, statusText, postsCount, rating, plus, minus, subscribers, isSubs, posts})

export const updStatusText = (statusText) => ({type: UPD_STATUS_TEXT, statusText})

export const isSubscribed = (isSubs) => ({type: IS_SUBSCRIBED, isSubs})

export const delPost = (postId) => ({type: DEL_POST, postId})
export const editPost = (postId, newPostText) => ({type: EDIT_POST, postId, newPostText})