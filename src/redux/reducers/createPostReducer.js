import {CREATE_POST} from '../actions/actionTypes';

let initialState = {
    isCreate: false,
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                isCreate: action.isCreate
            }
        default:
            return state;
    }
}   

export default postsReducer;