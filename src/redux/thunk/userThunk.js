import {API} from "../../api/api";
import {setUser, updStatusText} from "../actions/userActions";
// import {refreshToken} from "../actions/authActions";

export const getUserThunkCreator = (userId) => {
// export const getUserThunkCreator = () => {
    return (dispatch) => {
        API.getUser(userId)
        // API.getUser()
            .then(response => {
                console.log(`инфо - ${response.user_info.subscribers}`);
                let isMe = response.isMe;
                let userId = response.user_info.id;
                let username = response.user_info.username;
                let img = response.user_info.img;
                let statusText = response.user_info.statusText;
                let postsCount = response.user_info.posts_count;
                let rating = response.all_rating;
                let plus = response.user_info.plus;
                let minus = response.user_info.minus;
                let subscribers = response.user_info.subscribers;
                let posts = [...response.user_posts];

                // let access_token = localStorage.getItem('access_token');
                // dispatch(refreshToken(access_token));
                dispatch(setUser(isMe, userId, username, img, statusText, postsCount, rating, plus, minus, subscribers, posts));
            });
    }
}

export const updUserThunkCreator = (userId, statusText) => {
    if (statusText === '') {
        statusText = ' ' // обработать на стороне сервера если приходит пустая строка тут можно менять на ноне или фолс
    }
    return (dispatch) => {
        API.updUser(userId, statusText).then(response => {
            dispatch(updStatusText(response.statusText))
        }).catch((error) => {
            console.log('ошибка');
            console.error(error);
        });
    }
}
