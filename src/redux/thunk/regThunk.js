import { setReg } from "../actions/regActions";

const { API } = require("../../api/api");


export const regThunkCreator = (username, password) => {
    return (dispatch) => {
        API.register(username, password).then(response => {
            const resReg = response.isReg;
            if (resReg === true) {
                dispatch(setReg(resReg))
            } else {
                console.log(resReg);
            }
        })
    }
}