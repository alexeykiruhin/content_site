import {setInfo} from "../actions/authActions";
import { API } from '../../api/api';


export const logoutThunkCreator = () => {
    return (dispatch) => {
        API.logout().then(response => {
            console.log(`logout successfully`);
            // зануляем данные об аутентификации
            dispatch(setInfo(false, { id: null, img: null, username: '' }));
        }).catch((error) => {
            // console.log(`ошибка - ${error.response.status}`);
            console.log(`ошибка - logoutThunk`);
        });
    }
}