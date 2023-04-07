import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";


const HeaderContainer = () => {

    const username = useSelector( (state) => state.auth.username)
    const img = useSelector((state) => state.auth.img);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.post(`http://127.0.0.1:5000/login`, {
            username: 'Ivan',
            password: 'password1'
        })
            .then((response) => {
                let isAuth = response.data.isAuth;
                let user_obj = response.data.user_obj;
                dispatch({type: 'SET_INFO', isAuth, user_obj})
            })
            .catch((error) => {
                console.error(error);
            });
    })

    return <Header username={username} img={img} isAuth={isAuth} />
}

export default HeaderContainer;