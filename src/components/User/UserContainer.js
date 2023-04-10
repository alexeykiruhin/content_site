import React, {useEffect} from "react";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setUser} from "../../redux/actions/userActions";
import {getUser} from "../../api/api";

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
        getUser(paramUserId.userId)
            .then(response => {
                let userId = response.user_info.id;
                let username = response.user_info.username;
                let img = response.user_info.img;
                let postsCount = response.user_info.posts_count;
                let rating = response.user_info.rating;
                let posts = [...response.user_posts];
                dispatch(setUser(userId, username, img, postsCount, rating, posts));
                // debugger
            });
    }, [dispatch, paramUserId.userId])

    return (
        <User userId={userId} username={username} img={img} postsCount={postsCount} rating={rating} posts={posts} />
    )
}

export default UserContainer;