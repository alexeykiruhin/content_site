import React, {useEffect} from "react";
import User from "./User";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const UserContainer = () => {

    const userId = useSelector((state) => state.userPage.userId);
    const nameUser = useSelector((state) => state.userPage.nameUser);
    const img = useSelector((state) => state.userPage.img);
    const countPosts = useSelector((state) => state.userPage.countPosts);
    const rating = useSelector((state) => state.userPage.rating);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/user/1`)
            .then(response => {
                let userId = response.data.user.userId;
                let nameUser = response.data.user.nameUser;
                let img = response.data.user.img;
                dispatch({type: 'SET_USER', userId, nameUser, img});
            });
    })

    return (
        <User userId={userId} nameUser={nameUser} img={img} countPosts={countPosts} rating={rating} />
    )
}

export default UserContainer;