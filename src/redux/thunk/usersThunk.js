import {API} from "../../api/api";
import {setUsers} from "../reducers/usersReducer";

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        API.getUsers().then(response => {
                let users = response.users;
                dispatch(setUsers(users));
            });
    }
}