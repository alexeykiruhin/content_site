import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserThunkCreator, updUserThunkCreator } from "../../redux/thunk/userThunk";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



const UserContainer = () => {
    const isMe = useSelector((state) => state.userPage.isMe);
    const userId = useSelector((state) => state.userPage.userId);
    const username = useSelector((state) => state.userPage.username);
    const img = useSelector((state) => state.userPage.img);
    const statusText = useSelector((state) => state.userPage.statusText);
    const postsCount = useSelector((state) => state.userPage.postsCount);
    const rating = useSelector((state) => state.userPage.rating);
    const plus = useSelector((state) => state.userPage.plus);
    const minus = useSelector(state => state.userPage.minus);
    const subscribers = useSelector(state => state.userPage.subscribers);
    const posts = useSelector((state) => state.userPage.posts);
    const dispatch = useDispatch();

    let paramUserId = useParams();

    useEffect(() => {
        dispatch(getUserThunkCreator(paramUserId.userId));
    }, [paramUserId.userId])

    const handlerSendStatusText = (value) => {
        dispatch(updUserThunkCreator(userId, value))
    }

    return (
        <User
            isMe={isMe}
            userId={userId}
            username={username}
            img={img}
            statusText={statusText}
            postsCount={postsCount}
            rating={rating}
            plus={plus}
            minus={minus}
            subscribers={subscribers}
            posts={posts}
            handlerSendStatusText={handlerSendStatusText}
        />
    )
}

const UserWithRedirect = withAuthRedirect(UserContainer);

export default UserWithRedirect;