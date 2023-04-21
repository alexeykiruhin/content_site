import React from "react";
import Header from "./Header";
import {useSelector} from "react-redux";


const HeaderContainer = () => {

    const id = useSelector((state) => state.auth.id)
    const username = useSelector((state) => state.auth.username)
    const img = useSelector((state) => state.auth.img);
    const isAuth = useSelector((state) => state.auth.isAuth);
    // console.log(isAuth);

    return <Header id={id} username={username} img={img} isAuth={isAuth}/>
}

export default HeaderContainer;