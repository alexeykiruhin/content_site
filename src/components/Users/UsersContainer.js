import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {getUsersThunkCreator} from "../../redux/thunk/usersThunk";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// const UsersWithRedirect = withAuthRedirect(Users); // в качестве тренировки, можно убрать

const UsersContainer = () => {

    const users = useSelector((state) => state.usersPage.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator());
    },[dispatch])

    // return <UsersWithRedirect users={users}/>
    return <Users users={users}/>
}
export default UsersContainer;
