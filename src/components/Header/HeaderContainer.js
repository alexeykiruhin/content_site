import React, {useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {setInfo} from "../../redux/actions/authActions";
import {login} from "../../api/api";


const HeaderContainer = () => {

    const username = useSelector((state) => state.auth.username)
    const password = useSelector((state) => state.auth.password)
    const img = useSelector((state) => state.auth.img);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {

        login(username, password).then((response) => {
            console.log(response)
            let isAuth = response.isAuth;
            let user_obj = response.user_obj;
            dispatch(setInfo(isAuth, user_obj))
        })
            .catch((error) => {
                console.error(error);
            });
    })

    return <Header username={username} img={img} isAuth={isAuth}/>
}

export default HeaderContainer;