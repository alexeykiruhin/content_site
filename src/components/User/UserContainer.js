import React, {useEffect} from "react";
import User from "./User";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setUser} from "../../redux/actions/userActions";

const UserContainer = () => {

    const userId = useSelector((state) => state.userPage.userId);
    const username = useSelector((state) => state.userPage.username);
    const img = useSelector((state) => state.userPage.img);
    const postsCount = useSelector((state) => state.userPage.postsCount);
    const rating = useSelector((state) => state.userPage.rating);
    const posts = useSelector((state) => state.userPage.posts);
    const dispatch = useDispatch();

    let paramUserId = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/user/${paramUserId.userId}`)
            .then(response => {
                console.log(response.data);
                let userId = response.data.id;
                let username = response.data.username;
                let img = response.data.img;
                let postsCount = response.data.postsCount;
                let rating = response.data.rating;
                let posts = response.data.posts;
                dispatch(setUser(userId, username, img, postsCount, rating, posts));
                // debugger
            });
    }, [dispatch, paramUserId.userId])

    return (
        <User userId={userId} username={username} img={img} postsCount={postsCount} rating={rating} posts={posts} />
    )
}

export default UserContainer;