import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {getUsersThunkCreator} from "../../redux/thunk/usersThunk";

const UsersContainer = () => {

    const users = useSelector((state) => state.usersPage.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator());
    })

  return <Users users={users} />
}
export default UsersContainer;
