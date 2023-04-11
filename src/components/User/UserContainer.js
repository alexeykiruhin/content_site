import React, {useEffect} from "react";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserThunkCreator} from "../../redux/thunk/userThunk";

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
        dispatch(getUserThunkCreator(paramUserId.userId));
    })

    return (
        <User userId={userId} username={username} img={img} postsCount={postsCount} rating={rating} posts={posts} />
    )
}

export default UserContainer;