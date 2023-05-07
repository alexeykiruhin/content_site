import React from "react";
import style from './PostComment.module.css';

const PostComment = props => {

    const calculateTime = date => {
        console.log(date);
        const yearsWords = ['год', 'года', 'лет'];
        const monthsWords = ['месяц', 'месяца', 'месяцев'];
        const daysWords = ['день', 'дня', 'дней'];
        const hoursWords = ['час', 'часа', 'часов'];
        const minutesWords = ['минута', 'минуты', 'минут'];
        const secondsWords = ['секунда', 'секунды', 'секунд'];

        function declension(num, words) {
            const cases = [2, 0, 1, 1, 1, 2];
            return words[
                (num % 100 > 4 && num % 100 < 20)
                    ? 2
                    : cases[(num % 10 < 5) ? num % 10 : 5]
            ];
        }

        const startDate = new Date(date);
        console.log(`startDate : ${startDate}`);
        const endDate = new Date();

        const diff = Math.abs(endDate.getTime() - startDate.getTime());
        // const diff = endDate.getTime() - startDate.getTime();

        const seconds = Math.floor((diff / 1000) % 60);
        console.log(`seconds : ${seconds}`);
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        console.log(`minutes : ${minutes}`);
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        // const out = `${years} лет, ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут.`;
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
        <>
            {/* добавить оформление комментария с аватаркой и ником автора */}
            <div className={style.commentHeader}>
                <img className={style.avatar} src={props.comment.author.img} alt="no img" />
                <div className={style.username} >{props.comment.author.username}</div>
                <div className={style.date} >{calculateTime(props.comment.created_at)}</div>
            </div>
            <div className={style.comment}>
                {props.comment.comment_text}
            </div>
        </>
    )
}

export default PostComment;