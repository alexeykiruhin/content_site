import {API} from "../../api/api";
import {setCount, setCurrentPage, setIsFetching, setNewRatingPost, setPosts} from "../actions/postsActions";

export const getPostsThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        API.getPosts(currentPage).then(response => {
            let posts = response.posts;
            let count = response.count;
            dispatch(setPosts(posts));
            dispatch(setCount(count));
            dispatch(setIsFetching(false));
        })
    }
}

export const nextPageThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        API.getPosts(currentPage).then(response => {
            let posts = response.posts;
            dispatch(setPosts(posts));
            dispatch(setIsFetching(false));
        });
    }
}

export const postRatingThunkCreator = (postId, score) => {
    return (dispatch) => {
        API.Post.sendScore(postId, score).then( response => {
            let newRating = response.new_rating;
            console.log(newRating);
            dispatch(setNewRatingPost(newRating));
        })
    }
}