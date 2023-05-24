import React, { useState } from "react";
import './User.css';
import editIcon from './img/edit-status.svg';
import StatusForm from './StatusForm';
// import EditPostForm from "./editPost/EditPostForm";
import EditUserPosts from "./EditUserPosts";
import UserPosts from "./UserPosts";

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
            <div className={'infoUserPage'}>
                <div className={'avatarUserPage'}>
                    <img src={props.img} alt={props.userId} />
                </div>
                <div className={'nameUserPage'}>
                    <div className={'userNameUserPage'}>
                        {props.username}
                    </div>
                    <div className={'statusText'}>
                        {/* обработать отображение пустого статуса */}

                        {/*Если айди не мой, то показываем статус без возможности редактирования*/}
                        {/*перенести эту логику на сервер, если айди переданного в урле юзера равен 
                        айди в куках, то возвращаем ключ это я и по нему тут делать проверку*/}
                        {/* {!(props.id === props.userId) &&
                            <span>{props.statusText}</span>
                        } */}
                        {!props.isMe && <span>{props.statusText}</span>}
                        {/*Если мой айди и флаг фолс то показываем статус с возможностью редактирования*/}
                        {/* {!props.isEditStatusText && props.id === props.userId && */}
                        {!isEditStatusText && props.isMe &&
                            <div>
                                <span><img className={'editIcon'} src={editIcon} alt="edit" /></span>
                                <span onClick={handlerEditStatusText}>{props.statusText}</span>
                            </div>
                        }
                        {/*Если флаг тру, то редактируем статус*/}
                        {isEditStatusText &&
                            <StatusForm
                                handlerEditAndSendStatusText={handlerEditAndSendStatusText}
                                statusText={props.statusText}
                            />
                        }

                    </div>
                    <div>
                        Количество постов: {props.postsCount}
                    </div>
                    <div>
                        Рейтинг: {props.rating}
                    </div>
                    <div>
                        Поставлено плюсов: {props.plus}
                    </div>
                    <div>
                        Поставлено минусов: {props.minus}
                    </div>
                </div>
                <div className={'btnsUserPage'}>
                    {!props.isMe ?
                        !props.isSubs ?
                            <button onClick={handlerSubscribeWrap}>Подписаться</button>
                            :
                            <button onClick={handlerUnsubscribeWrap}>Отписаться</button>
                        :
                        <span>Подписчиков: {props.subscribers}</span>
                    }
                    {/* <button>Подписаться</button> */}
                    {props.isMe && <button className={'Exit'} onClick={props.logout}>Выйти</button>}
                </div>
            </div>
            {!isEditPost ? <UserPosts posts={props.posts} delPost={props.delPost} toggleEditPostWrapper={toggleEditPostWrapper} /> :
            <EditUserPosts textPost={textPost} idPost={idPost} editPost={props.editPost} backToPosts={backToPosts} id={props.userId} isEditPost={isEditPost} />}
            
            {/* {isEditPost && <div className={'postsUserPage'}>
                <h3>Редактирование поста</h3>
                <EditPostForm textPost={textPost} idPost={idPost} editPost={props.editPost} backToPosts={backToPosts} id={props.userId} isEditPost={isEditPost}/>
            </div>} */}

        </div>
    )
}

export default User;