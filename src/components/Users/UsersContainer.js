import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {getUsersThunkCreator} from "../../redux/thunk/usersThunk";
import {withRedirect} from "../../hoc/redirectHoc";

const UsersWithRedirect = withRedirect(Users); // в качестве тренировки, можно убрать

const UsersContainer = () => {

    const users = useSelector((state) => state.usersPage.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator());
    })

  return <UsersWithRedirect users={users} />
}
export default UsersContainer;
