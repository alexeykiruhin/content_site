import {API} from "../../api/api";
import {setUser} from "../actions/userActions";

export const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        API.getUser(userId)
            .then(response => {
                let userId = response.user_info.id;
                let username = response.user_info.username;
                let img = response.user_info.img;
                let statusText = response.user_info.statusText;
                let postsCount = response.user_info.posts_count;
                let rating = response.user_info.rating;
                let posts = [...response.user_posts];
                dispatch(setUser(userId, username, img, statusText, postsCount, rating, posts));
            });
    }
}

export const updUserThunkCreator = (userId, statusText) => {
    return (dispatch) => {
        API.updUser(userId, statusText).then(response => {
            // console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }
}