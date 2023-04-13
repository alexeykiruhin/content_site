import {SET_INFO, UPDATE_LOGIN, UPDATE_PASSWORD} from "./actionTypes";

export const setInfo = (isAuth, user_obj) => ({type: SET_INFO, isAuth, user_obj});
export const updateLogin = (updateUserName) => ({type: UPDATE_LOGIN, updateUserName});
export const updatePswd = (updatePassword) => ({type: UPDATE_PASSWORD, updatePassword});