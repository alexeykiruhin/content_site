import {SET_TAG_SEARCH} from "../actions/actionTypes";

let initialState = {
    tag: ''
}
// по флагу isReg делаю редирект после регистрации
const tagSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAG_SEARCH:
            return {
                ...state,
                tag: action.tag
            }
        default:
            return state
    }
}

export default tagSearchReducer;