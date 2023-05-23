import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";


const HeaderContainer = () => {

    const { id, username, img, isAuth } = useSelector((state) => state.auth)

    return <Header id={id} username={username} img={img} isAuth={isAuth} />
}

export default HeaderContainer;