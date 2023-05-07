import {API} from "../../api/api";
import {setComments, setPostView, addCom} from "../actions/postViewActions";

export const getPostViewThunkCreator = (postId) => {
    return (dispatch) => {
        console.log(postId);
        API.Post.getPostView(postId)
            .then(response => {
                // console.log(`пост - ${JSON.stringify(response, null, 2)}`);
                // console.log(`rating - ${response.post_info.rating.result}`);
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

export const getCommentsThunkCreator = (postId) => {
    return (dispatch) => {
        API.PostComments.getComments(postId)
        .then(response => {
            // console.log(response.comments);
            dispatch(setComments(response.comments))
        })
    }
}

export const addCommentThunkCreator = (postId, text) => {
    return (dispatch) => {
        console.log(postId, text);
        API.PostComments.addComment(postId, text)
            .then(response => {
                // console.log(`пост - ${JSON.stringify(response, null, 2)}`);
                // console.log(`rating - ${response.post_info.rating.result}`);
                console.log(`добавлен - ${response.isCommented}`);
                dispatch(addCom(response.isCommented));
            });
    }
}