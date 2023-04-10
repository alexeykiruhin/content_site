import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {setUsers} from "../../redux/reducers/usersReducer";
import {getUsers} from "../../api/api";

const UsersContainer = () => {

    const users = useSelector((state) => state.usersPage.users);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(response => {
                let users = response.users;
                dispatch(setUsers(users));
            });
    })

  return <Users users={users} />
}
export default UsersContainer;
