import {SET_SEARCH, SET_TAG_SEARCH} from "./actionTypes";

export const setSearch = (result) => ({type: SET_SEARCH, result});
export const setTagSearch = (tag) => ({type: SET_TAG_SEARCH, tag});