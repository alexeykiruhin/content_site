import React, {useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {authThunkCreator} from "../../redux/thunk/authThunk";


const HeaderContainer = () => {

    const id = useSelector((state) => state.auth.id)
    const username = useSelector((state) => state.auth.username)
    const password = useSelector((state) => state.auth.password)
    const img = useSelector((state) => state.auth.img);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authThunkCreator(username, password));
    })

    return <Header id={id} username={username} img={img} isAuth={isAuth}/>
}

export default HeaderContainer;