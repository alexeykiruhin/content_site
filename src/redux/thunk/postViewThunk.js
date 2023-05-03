import {API} from "../../api/api";
import {setPostView} from "../actions/postViewActions";

export const getPostViewThunkCreator = (postId) => {
    return (dispatch) => {
        console.log(postId);
        API.Post.getPostView(postId)
            .then(response => {
                console.log(`пост - ${JSON.stringify(response, null, 2)}`);
                console.log(`rating - ${response.post_info.rating.result}`);
                let postId = response.post_info.id;
                let rating = response.post_info.rating.result;
                let text = response.post_info.text;
                let username = response.post_info.author.username;
                let img = response.post_info.author.img;
                let authorId = response.post_info.author.id;
                dispatch(setPostView(postId, rating, text, username, img, authorId));
            });
    }
}