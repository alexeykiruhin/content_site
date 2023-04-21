import {API} from "../../api/api";
import {setUser, updStatusText} from "../actions/userActions";
import {refreshToken} from "../actions/authActions";

export const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        API.getUser(userId)
            .then(response => {
                // console.log(`getUser - ${response}`);
                let userId = response.user_info.id;
                let username = response.user_info.username;
                let img = response.user_info.img;
                let statusText = response.user_info.statusText;
                let postsCount = response.user_info.posts_count;
                let rating = response.user_info.rating;
                let posts = [...response.user_posts];

                let access_token = localStorage.getItem('access_token');
                dispatch(refreshToken(access_token));
                dispatch(setUser(userId, username, img, statusText, postsCount, rating, posts));
            });
    }
}

export const updUserThunkCreator = (userId, statusText) => {
    return (dispatch) => {
        API.updUser(userId, statusText).then(response => {
            dispatch(updStatusText(response.statusText))
        }).catch((error) => {
            console.log('ошибка');
            console.error(error);
        });
    }
}