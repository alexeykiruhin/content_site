import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { getPostsThunkCreator, getSubsPostsThunkCreator, loadNewPostsThunkCreator, nextSubsPageThunkCreator } from "../../redux/thunk/postsThunk";
import { useInView } from "react-intersection-observer";

const PostsContainer = () => {
    const dispatch = useDispatch();
    const {
        currentPage,
        pageSize,
        posts,
        isFetching
    } = useSelector(state => state.postsPage);

    // флаг постов авторов на кого подписан
    const [isSubsPosts, setIsSubsPosts] = useState(false);
    // номер страницы
    const [pageNum, setPageNum] = useState(currentPage);
    // хук проверки доскролла до элемента
    // передаю реф вниз по дереву до последнего элемента в списке постов
    // ему и присваиваем реф
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    // обработчик переключения просмотра всех постов и постов авторов на кого подписан
    const togglePostsType = (flag) => {
        if (flag.target.textContent === 'Все посты') {
            setIsSubsPosts(false);
            setPageNum(1);
        } else {
            setIsSubsPosts(true);
            setPageNum(1);
        }
    }
    // диспатчу санку обычных постов или подписок в зависимости от флага
    useEffect(() => {
        if (isSubsPosts) {
            dispatch(getSubsPostsThunkCreator(currentPage, pageSize));
        } else {
            dispatch(getPostsThunkCreator(currentPage, pageSize));
        }
    }, [isSubsPosts]);
    // диспатч санки для загрузки новых постов в бесконечном скролле
    useEffect(() => {
        if (inView) {
            setPageNum(pageNum + 1);
            if (isSubsPosts) {
                dispatch(nextSubsPageThunkCreator(pageNum + 1, pageSize));
            } else {
                dispatch(loadNewPostsThunkCreator(pageNum + 1, pageSize))
            }
        }
    }, [inView])

    return (
        <Posts
            refIS={ref}
            isFetching={isFetching}
            posts={posts}
            togglePostsType={togglePostsType}
            isSubsPosts={isSubsPosts}
        />

    )
}

export default PostsContainer;