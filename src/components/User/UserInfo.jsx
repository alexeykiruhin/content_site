import React from "react";
import './User.css';
import editIcon from './img/edit-status.svg';
import StatusForm from './StatusForm';

const UserInfo = (props) => {
    return (
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
                        {!props.isEditStatusText && props.isMe &&
                            <div>
                                <span><img className={'editIcon'} src={editIcon} alt="edit" /></span>
                                <span onClick={props.handlerEditStatusText}>{props.statusText}</span>
                            </div>
                        }
                        {/*Если флаг тру, то редактируем статус*/}
                        {props.isEditStatusText &&
                            <StatusForm
                                handlerEditAndSendStatusText={props.handlerEditAndSendStatusText}
                                statusText={props.statusText}
                            />
                        }

                    </div>
                    <div className={'userInfoItem'}>
                        <span>Постов: </span><span>{props.postsCount}</span>
                    </div>
                    <div className={'userInfoItem'}>
                        <span>Рейтинг: </span><span>{props.rating}</span>
                    </div>
                    <div className={'userInfoItem'}>
                        <span>Плюсов: </span><span>{props.plus}</span>
                    </div>
                    <div className={'userInfoItem'}>
                        <span>Минусов: </span><span>{props.minus}</span>
                    </div>
                </div>
                <div className={'btnsUserPage'}>
                    {!props.isMe ?
                        !props.isSubs ?
                            <button onClick={props.handlerSubscribeWrap}>Подписаться</button>
                            :
                            <button onClick={props.handlerUnsubscribeWrap}>Отписаться</button>
                        :
                        <span>Подписчиков: {props.subscribers}</span>
                    }
                    {/* <button>Подписаться</button> */}
                    {props.isMe && <button className={'Exit'} onClick={props.logout}>Выйти</button>}
                </div>
            </div>
    )
}

export default UserInfo;