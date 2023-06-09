import React, { useRef, useState } from 'react';
import styles from './PostComment.module.css';
import EditCommentForm from "./EditCommentForm";
import { delCommentThunkCreator, editCommentThunkCreator } from '../../../redux/thunk/postViewThunk';
import { useDispatch, useSelector } from "react-redux";

const PostComment = props => {

    const textdivRef = useRef(null);

    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.id);
    const commentId = props.comment._id

    const handleToggleEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleEditComment = (text) => {
        console.log(`commentId, text`, commentId, text);
        console.log(`userId = authorId`, userId, props.comment.author.id);
        dispatch(editCommentThunkCreator(commentId, text));
        setIsEdit(!isEdit);
    }

    const handleDelComment = () => {
        console.log(props.comment._id);
        dispatch(delCommentThunkCreator(commentId));
    }

    // const editComment = () => {
    //     props.handleEdit(props.comment._id.slice(10, -2))
    // }

    const calculateTime = date => {
        // массивы для склонения
        const yearsWords = ['год', 'года', 'лет'];
        const monthsWords = ['месяц', 'месяца', 'месяцев'];
        const daysWords = ['день', 'дня', 'дней'];
        const hoursWords = ['час', 'часа', 'часов'];
        const minutesWords = ['минута', 'минуты', 'минут'];
        const secondsWords = ['секунда', 'секунды', 'секунд'];

        // функция для верного склонения
        const declension = (num, words) => {
            const cases = [2, 0, 1, 1, 1, 2];
            return words[
                (num % 100 > 4 && num % 100 < 20)
                    ? 2
                    : cases[(num % 10 < 5) ? num % 10 : 5]
            ];
        }

        const localDate = new Date(date);
        // получаем текущее смещение часового пояса
        const timeZoneOffset = new Date().getTimezoneOffset();
        // складываем с полученным временем т.к. смещение отрицательное
        const startDate = new Date(localDate.getTime() + (timeZoneOffset * 60 * 1000));
        // получаем текущую дату
        const endDate = new Date();
        // разница дат
        const diff = endDate.getTime() - startDate.getTime();
        // вычисляем единицы измерения
        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        // готовим ответ в формате одной наибольшей единицы измерения
        let out = '';
        if (years > 0) {
            out = `${years} ${declension(years, yearsWords)}`;
        } else if (months > 0) {
            out = `${months} ${declension(months, monthsWords)}`;
        } else if (days > 0) {
            out = `${days} ${declension(days, daysWords)}`;
        } else if (hours > 0) {
            out = `${hours} ${declension(hours, hoursWords)}`;
        } else if (minutes > 0) {
            out = `${minutes} ${declension(minutes, minutesWords)}`;
        } else {
            out = `${seconds} ${declension(seconds, secondsWords)}`;
        }
        return out;

    }

    

    return (
        <div className={styles.commentWrapper}>
            <div className={styles.commentHeader}>
                <div className={styles.commentHeaderInfo}>
                    <img className={styles.avatar} src={props.comment.author.img} alt="no img" />
                    <div className={styles.username} >{props.comment.author.username}</div>
                    <div className={styles.date} >{calculateTime(props.comment.created_at)}</div>
                </div>
                {userId === props.comment.author.id && <div className={styles.editComment} onClick={handleToggleEdit}>...</div>}
            </div>
            {isEdit ?
                <div className={styles.editCommentBG}>
                    <EditCommentForm
                        commentText={props.comment.comment_text}
                        sizeText={textdivRef.current ? textdivRef.current.scrollHeight : '20'}
                        handleEditComment={handleEditComment}
                        handleDelComment={handleDelComment}
                    />
                </div>
                :
                <div className={styles.comment} ref={textdivRef}>
                    {props.comment.comment_text}
                </div>
            }

        </div>
    )
}

export default PostComment;