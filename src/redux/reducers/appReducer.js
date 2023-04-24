import {SET_INIT_OK} from "../actions/actionTypes";

let initialState = {
    init: false,
}

const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT_OK:
            return {
                ...state,
                init: true
            }
        default:
            return state
    }
}

export default initReducer;