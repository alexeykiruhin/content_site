const SET_INFO = 'SET_INFO';

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

const setInfo = (isAuth, user_obj) => ({type: SET_INFO, isAuth, user_obj})

export default authReducer;