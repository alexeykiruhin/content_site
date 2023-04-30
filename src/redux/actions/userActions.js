import {SET_USER, UPD_STATUS_TEXT} from "./actionTypes";

export const setUser = (isMe, userId, username, img, statusText, postsCount, rating, plus, minus, subscribers, posts) =>
    ({type: SET_USER, isMe, userId, username, img, statusText, postsCount, rating, plus, minus, subscribers, posts})
export const updStatusText = (statusText) => ({type: UPD_STATUS_TEXT, statusText})