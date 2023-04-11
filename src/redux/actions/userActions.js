import {SET_USER} from "./actionTypes";

export const setUser = (userId, username, img, postsCount, rating, posts) =>
    ({type: SET_USER, userId, username, img, postsCount, rating, posts})
