import React from "react";
import styles from './Post.module.css';
import { NavLink } from "react-router-dom";
import commentIcon from './icon/comment.png';
import {setTagSearch} from '../../redux/actions/tagSearchActions';
import { useDispatch } from "react-redux";

const Post = (props) => {

    const dispatch = useDispatch();

    const sendScorePlus = () => {
        props.sendScore(props.post.id, 1);
    }

    const sendScoreMinus = () => {
        props.sendScore(props.post.id, 0);
    }

    const handleClickTag = (obj) => {
        dispatch(setTagSearch(obj.target.innerHTML));
    }

    return (
        <div ref={props.refIS} className={styles.Post}>
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
            <div className={styles.postText}>
                {props.post.text}
            </div>
            <div className={styles.postActions}>
                <NavLink to={`/post/${props.post.id}`} className={styles.openBtn}>
                    <img className={styles.commentIcon} src={commentIcon} alt="no img" />
                </NavLink>
                <div className={styles.tagsWrapper}>
                    {props.post.tags.map((tag, index) => <span className={styles.tag} key={index} onClick={handleClickTag}>
                        <NavLink to={`/tag-search`} className={styles.tag}>
                            {tag.tag_name}
                        </NavLink>
                    </span>)}
                </div>
            </div>
        </div>
    )
}

export default Post;