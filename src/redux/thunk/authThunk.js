import {setInfo} from "../actions/authActions";
import { API } from '../../api/api';


export const authThunkCreator = (username, password) => {
    return (dispatch) => {
        API.login(username, password).then(response => {
            let isAuth = response.isAuth;
            let user_obj = response.user_obj;
            console.log(isAuth, user_obj);
            let refresh_token = response.refresh_token;
            let access_token = response.access_token;
            localStorage.setItem('refresh_token', refresh_token);
            localStorage.setItem('access_token', access_token);
            dispatch(setInfo(isAuth, user_obj));
        }).catch((error) => {
            console.log('ошибка');
            console.error(error);
        });
    }
}