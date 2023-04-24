import { setInfo } from "../actions/authActions";
import { API } from '../../api/api';


export const checkAuthThunkCreator = () => {
    return async (dispatch) => {
        try {
            const response = await API.checkAuth();
            console.log(`chekThunk - ${response}`);
            let isAuth = response.isAuth;
            let user_obj = response.user_obj;
            let access_token = response.access_token;
            localStorage.setItem('access_token', access_token);
            dispatch(setInfo(isAuth, user_obj));
            return response;
        } catch (error) {
            // ответ от рефреша если не авторизован, когда нет рефреш токена
            console.log('Error checking authentication:', error);
            // dispatch(setError(true, 'Unable to check authentication.'));
            return error;
        }
    };
}
