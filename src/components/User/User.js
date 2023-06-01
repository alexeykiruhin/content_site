import React, { useState } from "react";
import './User.css';
// import EditPostForm from "./editPost/EditPostForm";
import EditUserPosts from "./EditUserPosts";
import UserPosts from "./UserPosts";
import UserInfo from "./UserInfo";

const User = (props) => {
    //убрал из бизнес слоя значение переключения поля, слишком локальное состояние это
    const [isEditStatusText, toggleEditStatusText] = useState(false);
    const [isEditPost, toggleEditPost] = useState(false);
    const [textPost, editTextPost] = useState('');
    const [idPost, editIdPost] = useState('');

    const handlerEditAndSendStatusText = (value) => {
        props.handlerSendStatusText(value);
        toggleEditStatusText(false);
    }

    const handlerEditStatusText = () => {
        toggleEditStatusText(true);
    }

    const handlerSubscribeWrap = () => {
        props.handlerSubscribe()
    }

    const handlerUnsubscribeWrap = () => {
        props.handlerUnsubscribe()
    }

    const toggleEditPostWrapper = (postId, textPost) => {
        toggleEditPost(true);
        editTextPost(textPost);
        editIdPost(postId);
    }

    const backToPosts = () => {
        toggleEditPost(false);
    }

    return (
        <div className={'User'}>
            <div className={'userWrapper'}>
                <UserInfo
                    img={props.img}
                    userId={props.userId}
                    username={props.username}
                    isMe={props.isMe}
                    statusText={props.statusText}
                    postsCount={props.postsCount}
                    rating={props.rating}
                    plus={props.plus}
                    minus={props.minus}
                    isSubs={props.isSubs}
                    subscribers={props.subscribers}
                    logout={props.logout}
                    isEditStatusText={isEditStatusText}
                    handlerEditStatusText={handlerEditStatusText}
                    handlerEditAndSendStatusText={handlerEditAndSendStatusText}
                    handlerSubscribeWrap={handlerSubscribeWrap}
                    handlerUnsubscribeWrap={handlerUnsubscribeWrap}
                />
                {!isEditPost ?
                    <UserPosts
                        posts={props.posts}
                        delPost={props.delPost}
                        toggleEditPostWrapper={toggleEditPostWrapper}
                    />
                    :
                    <EditUserPosts
                        textPost={textPost}
                        idPost={idPost}
                        editPost={props.editPost}
                        backToPosts={backToPosts}
                        id={props.userId}
                        isEditPost={isEditPost}
                    />}
            </div>
        </div>
    )
}

export default User;