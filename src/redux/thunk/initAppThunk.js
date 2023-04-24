import {setInit} from "../actions/initActions";
import { checkAuthThunkCreator } from "../../redux/thunk/checkAuthThunk";
// import { API } from '../../api/api';


export const initAppThunkCreator = () => {
    return (dispatch) => {
        const promiseCheckAuth = dispatch(checkAuthThunkCreator());

        Promise.all([promiseCheckAuth]).then(() => {
            dispatch(setInit());
        })
    }
}