import {SET_INFO, UPDATE_LOGIN, UPDATE_PASSWORD} from "../actions/actionTypes";

let initialState = {
    id: null,
    username: '',
    password: '',
    img: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO:
            return {
                ...state,
                ...action.user_obj,
                isAuth: action.isAuth
            }
        case UPDATE_LOGIN:
            return {
                ...state,
                username: action.updateUserName
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.updatePassword
            }
        default:
            return state
    }
}

export default authReducer;