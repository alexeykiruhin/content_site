import {SET_INFO, REFRESH_TOKEN} from "./actionTypes";

export const setInfo = (isAuth, user_obj) => ({type: SET_INFO, isAuth, user_obj});
// export const setInfo = (isAuth, user_obj, access_token) => ({type: SET_INFO, isAuth, user_obj, access_token});
export const refreshToken = (access_token) => ({type: REFRESH_TOKEN, access_token})