import React from "react";
import './User.css';

const User = (props) => {
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