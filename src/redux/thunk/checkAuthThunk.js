import {setInfo} from "../actions/authActions";
import { API } from '../../api/api';


export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        API.checkAuth().then(response => {
            console.log(`chekThunk - ${response}`);
            let isAuth = response.isAuth;
            let user_obj = response.user_obj;
            let access_token = response.access_token;
            localStorage.setItem('access_token', access_token);
            dispatch(setInfo(isAuth, user_obj));
        }).catch((error) => {
            console.log(`ошибка - ${error.response.status}`);
        });
    }
}