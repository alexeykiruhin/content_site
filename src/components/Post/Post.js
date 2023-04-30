import React from "react";
import styles from './Post.module.css';
import { NavLink } from "react-router-dom";

const Post = (props) => {

    const sendScorePlus = () => {
        props.sendScore(props.post.id, 1);
    }

    const sendScoreMinus = () => {
        props.sendScore(props.post.id, 0);
    }

    return (
        <div className={styles.Post}>
            <div className={styles.postHeader}>
                <div className={styles.postUserInfo}>
                    <NavLink to={`/user/${props.post.author.id}`}>
                        <div className={styles.postAvatar}>
                            <img src={props.post.author.img} alt="no ava" />
                        </div>
                    </NavLink>
                        <div className={styles.postNameUser}>
                    <NavLink to={`/user/${props.post.author.id}`}>
                            {props.post.author.username}
                    </NavLink>
                        </div>
                </div>
                <div className={styles.postRating}>
                    <button onClick={sendScoreMinus}>-</button>
                    <div>{props.post.rating.result}</div>
                    <button onClick={sendScorePlus}>+</button>
                </div>
            </div>
            <div className={styles.postText}>{props.post.text}</div>
        </div>
    )
}

export default Post;