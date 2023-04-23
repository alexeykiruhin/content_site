import React from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import { logoutThunkCreator } from "../../redux/thunk/logoutThunk";


const HeaderContainer = () => {

    const id = useSelector((state) => state.auth.id)
    const username = useSelector((state) => state.auth.username)
    const img = useSelector((state) => state.auth.img);
    const isAuth = useSelector((state) => state.auth.isAuth);
    // console.log(isAuth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutThunkCreator());
    }

    return <Header id={id} username={username} img={img} isAuth={isAuth} logout={logout}/>
}

export default HeaderContainer;