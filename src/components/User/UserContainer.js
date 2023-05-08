import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserThunkCreator, subscribe, unsubscribe, updUserThunkCreator } from "../../redux/thunk/userThunk";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



const UserContainer = () => {
    const {
        isMe,
        userId,
        username,
        img,
        statusText,
        postsCount,
        rating,
        plus,
        minus,
        subscribers,
        isSubs,
        posts
      } = useSelector(state => state.userPage);
      
    const dispatch = useDispatch();

    let paramUserId = useParams();

    useEffect(() => {
        dispatch(getUserThunkCreator(paramUserId.userId));
    }, [paramUserId.userId])

    const handlerSendStatusText = (value) => {
        dispatch(updUserThunkCreator(userId, value))
    }

    const handlerSubscribe = () => {
        dispatch(subscribe(paramUserId.userId))
        console.log(paramUserId.userId);
    }

    const handlerUnsubscribe = () => {
        dispatch(unsubscribe(paramUserId.userId))
        console.log(paramUserId.userId);
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
            isSubs={isSubs}
            posts={posts}
            handlerSendStatusText={handlerSendStatusText}
            handlerSubscribe={handlerSubscribe}
            handlerUnsubscribe={handlerUnsubscribe}
        />
    )
}

const UserWithRedirect = withAuthRedirect(UserContainer);

export default UserWithRedirect;