import {SET_INFO} from "./actionTypes";

export const setInfo = (isAuth, user_obj) => ({type: SET_INFO, isAuth, user_obj});