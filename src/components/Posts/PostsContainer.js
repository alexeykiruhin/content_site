import {useDispatch, useSelector} from "react-redux";
import {setCount, setCurrentPage, setIsFetching, setPosts} from "../../redux/reducers/postsReducer";
import React, {useEffect} from "react";
import Posts from "./Posts";
import {getPosts} from "../../api/api";

const PostsContainer = () => {

    const currentPage = useSelector((state) => state.postsPage.currentPage);
    const posts = useSelector((state) => state.postsPage.posts);
    const pageSize = useSelector((state) => state.postsPage.pageSize);
    const count = useSelector((state) => state.postsPage.count);
    const isFetching = useSelector((state) => state.postsPage.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        getPosts(currentPage).then(response => {
            let posts = response.posts;
            let count = response.count;
            dispatch(setPosts(posts));
            dispatch(setCount(count));
            dispatch(setIsFetching(false));
        })
    })

    const handleSetCurrentPage = (currentPage) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        getPosts(currentPage).then(response => {
            let posts = response.posts;
            dispatch(setPosts(posts));
            dispatch(setIsFetching(false));
        });
    }

    return <Posts
        isFetching={isFetching}
        posts={posts}
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={handleSetCurrentPage}
    />
}

export default PostsContainer;
