import {SET_REG} from "../actions/actionTypes";

let initialState = {
    isReg: false
}
// по флагу isReg делаю редирект после регистрации
const regReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REG:
            return {
                ...state,
                isReg: action.isReg
            }
        default:
            return state
    }
}

export default regReducer;