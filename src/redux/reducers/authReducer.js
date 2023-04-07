import {SET_INFO} from "../actions/actionTypes";

let initialState = {
    username: null,
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
        default:
            return state
    }
}

export default authReducer;