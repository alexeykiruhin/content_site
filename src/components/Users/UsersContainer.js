import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {getUsersThunkCreator} from "../../redux/thunk/usersThunk";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const UsersContainer = () => {
    
    const users = useSelector((state) => state.usersPage.users);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsersThunkCreator());
    },[dispatch])
    
    return <Users users={users}/>
}
const UsersWithRedirect = withAuthRedirect(UsersContainer);
//возвращаем контейнерную с редиректом а в апп указваю имя как просто контейнерную
export default UsersWithRedirect;
