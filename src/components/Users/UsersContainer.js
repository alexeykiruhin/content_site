import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {getUsersThunkCreator} from "../../redux/thunk/usersThunk";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const UsersWithRedirect = withAuthRedirect(Users); // в качестве тренировки, можно убрать

const UsersContainer = () => {
    // isAuth нужен для сокрытия компонента, если юзер не авторизован
    const isAuth = useSelector((state) => state.auth.isAuth);

    const users = useSelector((state) => state.usersPage.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator());
    })
    // Не забываем передать isAuth в хок
    return <UsersWithRedirect isAuth={isAuth} users={users}/>
}
export default UsersContainer;
