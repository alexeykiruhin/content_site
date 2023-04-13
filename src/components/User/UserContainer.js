import React, {useEffect} from "react";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserThunkCreator, updUserThunkCreator} from "../../redux/thunk/userThunk";
import {editStatusText, updStatusText} from "../../redux/actions/userActions";

const UserContainer = () => {
    //id нужен для определения, в свой ли профиль ты попал
    const id = useSelector((state) => state.auth.id);

    const userId = useSelector((state) => state.userPage.userId);
    const username = useSelector((state) => state.userPage.username);
    const img = useSelector((state) => state.userPage.img);
    const statusText = useSelector((state) => state.userPage.statusText);
    const isEditStatusText = useSelector((state) => state.userPage.isEditStatusText);
    const postsCount = useSelector((state) => state.userPage.postsCount);
    const rating = useSelector((state) => state.userPage.rating);
    const posts = useSelector((state) => state.userPage.posts);
    const dispatch = useDispatch();

    let paramUserId = useParams();

    useEffect(() => {
        dispatch(getUserThunkCreator(paramUserId.userId));
    },[dispatch, paramUserId.userId])

    const handlerSendStatusText = (event) => {
        dispatch(editStatusText(false));
        dispatch(updUserThunkCreator(userId, event.target.value))
    }

    const handlerEditStatusText = () => {
        dispatch(editStatusText(true));
    }

    const handlerUpdStatusText = (event) => {
        dispatch(updStatusText(event.target.value));
    }

    return (
        <User id={id}
              userId={userId}
              username={username}
              img={img}
              statusText={statusText}
              isEditStatusText={isEditStatusText}
              postsCount={postsCount}
              rating={rating}
              posts={posts}
              handlerSendStatusText={handlerSendStatusText}
              handlerEditStatusText={handlerEditStatusText}
              handlerUpdStatusText={handlerUpdStatusText}
        />
    )
}

export default UserContainer;