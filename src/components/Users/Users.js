import React from "react";
import styles from './Users.module.css';
import { NavLink } from "react-router-dom";

// Добавить вывод юзеров в виде таблицы рейтинга

const Users = (props) => {
    return (
        <div className={styles.Users}>
            <div className={styles.UsersTable}>
                <div className={styles.wrapperUser + ' ' + styles.names}>
                    <div>Место</div>
                    <div>Ник</div>
                    <div>Рейтинг</div>
                </div>
                {props.users.map((user, index) => <div key={user.id} className={styles.wrapperUser}>
                    <div className={styles.num}>
                        {index + 1}
                    </div>
                    <div className={styles.userInfoTable}>
                        <NavLink to={`/user/${user.id}`}>
                            <div className={styles.avatar}>
                                <img src={user.img} alt="no ava" />
                            </div>
                        </NavLink>
                        <NavLink to={`/user/${user.id}`}>
                            <div className={styles.nameUser}>
                                {user.username}
                            </div>
                        </NavLink>
                    </div>
                    <div className={styles.ratingUser}>
                        {user.rating}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Users