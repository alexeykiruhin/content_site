import {setInfo} from "../actions/authActions";
import { API } from '../../api/api';
// const {API} = require("../../api/api");


export const authThunkCreator = (username, password) => {
    return (dispatch) => {
        API.login(username, password).then(response => {
            let isAuth = response.isAuth;
            let user_obj = response.user_obj;
            dispatch(setInfo(isAuth, user_obj))
        }).catch((error) => {
            console.error(error);
        });
    }
}