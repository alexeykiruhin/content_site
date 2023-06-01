import { setSearch } from "../actions/searchActions";

const { API } = require("../../api/api");


export const searchThunkCreator = (tag) => {
    return (dispatch) => {
        API.Search.search(tag).then(response => {
            console.log(response.result);
            dispatch(setSearch(response.result))
        })
    }
}