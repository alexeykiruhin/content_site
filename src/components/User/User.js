import React, { useState } from "react";
import './User.css';
import editIcon from './img/edit-status.svg';
import StatusForm from './StatusForm';

const User = (props) => {
    //убрал из бизнес слоя значение переключения поля, слишком локальное состояние это
    const [isEditStatusText, toggleEditStatusText] = useState(false);

    const handlerEditAndSendStatusText = (value) => {
        props.handlerSendStatusText(value)
        toggleEditStatusText(false);
    }

    const handlerEditStatusText = () => {
        toggleEditStatusText(true);
    }

    return (
        <div className={'User'}>
            <div className={'infoUserPage'}>
                <div className={'avatarUserPage'}>
                    <img src={props.img} alt={props.id}/>
                </div>
                <div className={'nameUserPage'}>
                    <div>
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
                                <span><img className={'editIcon'} src={editIcon} alt="edit"/></span>
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
                </div>
                <div className={'btnsUserPage'}>
                    <button>Подписаться</button>
                    <button>Написать</button>
                    <button>+</button>
                    <button>-</button>
                    {props.isMe &&
                        <button onClick={() => console.log('заглушка выхода')}>Выйти</button>}
                </div>
            </div>
            <div className={'postsUserPage'}>
                <h3>Посты пользователя</h3>
                {props.posts.length !== 0 ?
                    props.posts.map((post, index) => <div key={index}>{post}</div>) :
                    <div>У пользователя ещё нет постов</div>}
            </div>
        </div>
    )
}

export default User;