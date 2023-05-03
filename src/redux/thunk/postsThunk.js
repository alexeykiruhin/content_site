import {API} from "../../api/api";
import {setCount, setCurrentPage, setIsFetching, setNewRatingPost, setPosts} from "../actions/postsActions";
import {updRatingPostView} from "../actions/postViewActions";

export const getPostsThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        API.Post.getPosts(currentPage).then(response => {
            // получаем массив постов
            let posts = response.posts;
            let count = response.count;
            dispatch(setPosts(posts));
            dispatch(setCount(count));
            dispatch(setIsFetching(false));
        })
    }
}

export const getSubsPostsThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        API.Post.getSubsPosts(currentPage).then(response => {
            // получаем массив постов
            let posts = response.posts;
            let count = response.count;
            console.log(posts);
            dispatch(setPosts(posts));
            dispatch(setCount(count));
            dispatch(setIsFetching(false));
        })
    }
}

export const nextSubsPageThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        API.Post.getSubsPosts(currentPage).then(response => {
            let posts = response.posts;
            dispatch(setPosts(posts));
            dispatch(setIsFetching(false));
        });
    }
}

export const nextPageThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        API.Post.getPosts(currentPage).then(response => {
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
            console.log(response);
            dispatch(setNewRatingPost(postId, newRating));
            dispatch(updRatingPostView(newRating.result));
        })
    }
}