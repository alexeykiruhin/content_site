import {SET_SEARCH, SET_TAG_SEARCH} from "../actions/actionTypes";

let initialState = {
    tag: '',
    result: [{text:'Результат поиска', id: false}]
}
// по флагу isReg делаю редирект после регистрации
const tagSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAG_SEARCH:
            return {
                ...state,
                tag: action.tag
            }
        case SET_SEARCH:
            return {
                ...state,
                result: action.result
            }
        default:
            return state
    }
}

export default tagSearchReducer;