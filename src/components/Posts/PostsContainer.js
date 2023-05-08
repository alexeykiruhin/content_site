import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import Posts from "./Posts";
import {getPostsThunkCreator, getSubsPostsThunkCreator, nextPageThunkCreator, nextSubsPageThunkCreator} from "../../redux/thunk/postsThunk";

const PostsContainer = () => {

    const [isSubsPosts, setIsSubsPosts] = useState(false);

    const currentPage = useSelector((state) => state.postsPage.currentPage);
    const pageSize = useSelector((state) => state.postsPage.pageSize);
    const posts = useSelector((state) => state.postsPage.posts);
    const count = useSelector((state) => state.postsPage.count);
    const isFetching = useSelector((state) => state.postsPage.isFetching);
    const dispatch = useDispatch();

    const dispatchGetPosts = useCallback(() => {
        dispatch(getPostsThunkCreator(currentPage, pageSize));
    }, [currentPage, dispatch]);

    const dispatchGetSubsPosts = useCallback(() => {
        dispatch(getSubsPostsThunkCreator(currentPage, pageSize));
    }, [currentPage, dispatch]);

    useEffect(() => {
        if(isSubsPosts) {
            dispatchGetSubsPosts();
        }else {
            dispatchGetPosts();
        }
    }, [dispatchGetPosts, dispatchGetSubsPosts, isSubsPosts]);

    const handleSetCurrentPage = (currentPage, pageSize) => {
        if(isSubsPosts) {
            dispatch(nextSubsPageThunkCreator(currentPage, pageSize));
        }else {
            dispatch(nextPageThunkCreator(currentPage, pageSize));
        }
    }

    const handlerViewPosts = () => {
        //просмотр подписочных постов
        setIsSubsPosts(true);
    }

    const handlerPosts = () => {
        //просмотр всех постов
        setIsSubsPosts(false);
    }

    return <Posts
        isFetching={isFetching}
        posts={posts}
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        handleSetCurrentPage={handleSetCurrentPage}
        handlerViewPosts={handlerViewPosts}
        handlerPosts={handlerPosts}
    />
}

export default PostsContainer;
// добавить систему рейтинга на посты, один юзер один + или -
// так же добавить систему рейтинга юзеру которая состоит из всех рейтингов его поста