import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect} from "react";
import Posts from "./Posts";
import {getPostsThunkCreator, nextPageThunkCreator} from "../../redux/thunk/postsThunk";

const PostsContainer = () => {

    const currentPage = useSelector((state) => state.postsPage.currentPage);
    const posts = useSelector((state) => state.postsPage.posts);
    const pageSize = useSelector((state) => state.postsPage.pageSize);
    const count = useSelector((state) => state.postsPage.count);
    const isFetching = useSelector((state) => state.postsPage.isFetching);
    const dispatch = useDispatch();

    const dispatchGetPosts = useCallback(() => {
        dispatch(getPostsThunkCreator(currentPage));
    }, [currentPage, dispatch]);

    useEffect(() => {
        dispatchGetPosts();
    }, [dispatchGetPosts]);

    const handleSetCurrentPage = (currentPage) => {
        dispatch(nextPageThunkCreator(currentPage));
    }

    return <Posts
        isFetching={isFetching}
        posts={posts}
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        handleSetCurrentPage={handleSetCurrentPage}
    />
}

export default PostsContainer;
// пофиксить пагинацию и создания постов