import {EDIT_STATUS_TEXT, SET_USER, UPD_STATUS_TEXT} from "./actionTypes";

export const setUser = (userId, username, img, statusText, postsCount, rating, posts) =>
    ({type: SET_USER, userId, username, img, statusText, postsCount, rating, posts})
export const editStatusText = (isEditStatusText) => ({type: EDIT_STATUS_TEXT, isEditStatusText})
export const updStatusText = (statusText) => ({type: UPD_STATUS_TEXT, statusText})