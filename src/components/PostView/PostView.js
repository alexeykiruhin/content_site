import React from "react";
import styles from './PostView.module.css';
import { NavLink } from "react-router-dom";

const PostView = (props) => {

    const sendScorePlus = () => {
        console.log(`HOLOLO - ${props.post.postId}`);
        props.sendScore(props.post.postId, 1);
    }

    const sendScoreMinus = () => {
        props.sendScore(props.post.postId, 0);
    }

    return (
        <div className={styles.Post}>
            <div className={styles.postHeader}>
                <div className={styles.postUserInfo}>
                    <NavLink to={`/user/${props.post.authorId}`}>
                        <div className={styles.postAvatar}>
                            <img src={props.post.img} alt="no ava" />
                        </div>
                    </NavLink>
                        <div className={styles.postNameUser}>
                    <NavLink to={`/user/${props.post.authorId}`}>
                            {props.post.username}
                    </NavLink>
                        </div>
                </div>
                <div className={styles.postRating}>
                    <button onClick={sendScoreMinus}>-</button>
                    <div>{props.post.rating}</div>
                    <button onClick={sendScorePlus}>+</button>
                </div>
            </div>
            <div className={styles.postText}>{props.post.text}</div>
        </div>
    )
}

export default PostView;