import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import Posts from "./Posts";
import { getPostsThunkCreator, getSubsPostsThunkCreator, nextPageThunkCreator, nextSubsPageThunkCreator, loadNewPostsThunkCreator } from "../../redux/thunk/postsThunk";

const PostsContainer = () => {

    const currentPage = useSelector((state) => state.postsPage.currentPage);
    const pageSize = useSelector((state) => state.postsPage.pageSize);
    const posts = useSelector((state) => state.postsPage.posts);
    const count = useSelector((state) => state.postsPage.count);
    const isFetching = useSelector((state) => state.postsPage.isFetching);
    const dispatch = useDispatch();

    const [isSubsPosts, setIsSubsPosts] = useState(false);
    const [pageNum, setPageNum] = useState(currentPage);
    const [oldPostsLength, setPostsLength] = useState(0);

    const dispatchGetPosts = useCallback(() => {
        dispatch(getPostsThunkCreator(currentPage, pageSize));
    }, [currentPage, dispatch]);

    const dispatchGetSubsPosts = useCallback(() => {
        dispatch(getSubsPostsThunkCreator(currentPage, pageSize));
    }, [currentPage, dispatch]);

    const infinityScroll = useCallback(() => {
        const flexContainer = document.querySelector('.body');
        const flexContainerRect = flexContainer.getBoundingClientRect();
        const flexContainerHeight = flexContainerRect.height;
        console.log(Math.round(window.innerHeight + document.documentElement.scrollTop));
        console.log(Math.round(flexContainerHeight));
        if (
            Math.round(window.innerHeight + document.documentElement.scrollTop) !==
            Math.round(flexContainerHeight)
            // window.innerHeight + document.documentElement.scrollTop !==
            // document.documentElement.offsetHeight
            )
            return;
        console.log('Bingo!');
        // срабатывает в конце экрана
        // console.log(posts);
        // вызываем подгрузку следующей страницы только посты в стейте надо плюсовать а не замещать
        let nextPage = pageNum + 1;
        setPageNum(nextPage);
        const newPostsLength = posts.length;
        // console.log(`oldPostsLength - ${oldPostsLength}`);
        // console.log(`newPostsLength - ${newPostsLength}`);
        if (oldPostsLength !== newPostsLength) {
            setTimeout(dispatch(loadNewPostsThunkCreator(nextPage, pageSize)), 1000)
            setPostsLength(newPostsLength);
        }
    }, [posts]);

    // const handleScroll = () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop !==
    //         document.documentElement.offsetHeight
    //     )
    //         return;
    //     // срабатывает в конце экрана
    //     console.log('scroll');
    //     // вызываем подгрузку следующей страницы только посты в стейте надо плюсовать а не замещать
    //     let nextPage = pageNum + 1;
    //     setPageNum(nextPage);
    //     dispatch(loadNewPostsThunkCreator(nextPage, pageSize));
    // };

    useEffect(() => {
        if (isSubsPosts) {
            dispatchGetSubsPosts();
        } else {
            dispatchGetPosts();
        }
    }, [dispatchGetPosts, dispatchGetSubsPosts, isSubsPosts]);

    useEffect(() => {
        window.addEventListener("scroll", infinityScroll);
        // window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", infinityScroll);
        // return () => window.removeEventListener("scroll", handleScroll);
    })

    const handleSetCurrentPage = (currentPage, pageSize) => {
        if (isSubsPosts) {
            dispatch(nextSubsPageThunkCreator(currentPage, pageSize));
        } else {
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