import React from "react";
import './User.css';

const User = (props) => {
    return (
        <div className={'User'}>
            <div className={'infoUserPage'}>
                <div className={'avatarUserPage'}>
                    <img src={props.img} alt={props.userId}/>
                </div>
                <div className={'nameUserPage'}>
                    <div>
                        {props.nameUser}
                    </div>
                    <div>
                        Количество постов: {props.countPosts}
                    </div>
                    <div>
                        Рейтинг: {props.rating}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;