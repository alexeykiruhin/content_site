import {API} from "../../api/api";
import {setUser} from "../actions/userActions";

export const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        API.getUser(userId)
            .then(response => {
                let userId = response.user_info.id;
                let username = response.user_info.username;
                let img = response.user_info.img;
                let postsCount = response.user_info.posts_count;
                let rating = response.user_info.rating;
                let posts = [...response.user_posts];
                dispatch(setUser(userId, username, img, postsCount, rating, posts));
            });
    }
}