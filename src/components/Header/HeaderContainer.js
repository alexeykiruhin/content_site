import React from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";


const HeaderContainer = () => {

    const {id, username, img, isAuth} = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    return <Header id={id} username={username} img={img} isAuth={isAuth}/>
}

export default HeaderContainer;