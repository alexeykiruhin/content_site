import React from "react";
import './Posts.css'
import Preloader from "../common/Preloader/Preloader";
// import Post from "../Post/Post";
import PostContainer from "../Post/PostContainer";

const Posts = (props) => {
    let pagesCount = Math.ceil(props.count / props.pageSize);
    let pages = [];
    if (props.count === 0) {
        pages.push(1)
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }
    return (
        <div className={'Posts'}>
            <div className={'body'}>
                <div className={'pagination'}>
                    {pages.map((page, index) => {
                        return <span
                            onClick={() => {
                                props.handleSetCurrentPage(page);
                            }}
                            key={`pagination-${index}`}
                            className={
                                (props.currentPage === 0 ? 1 : props.currentPage) === page ? 'select pag' : 'notselect pag'
                            }
                        >{page}</span>
                    })}
                </div>
                <div>Всего постов: {props.count}</div>
                <br />
                <div className={'wrapperDifferentPosts'}>
                    <div onClick={props.handlerPosts}>Все посты</div>
                    {/* условие если вкладка подписки активна то показываем другие посты */}
                    <div onClick={props.handlerViewPosts}>Подписки</div>
                    {/* Добавить переключение между компонентами Все посты и Подписки используя флаг   */}
                </div>
                {(props.isFetching ?
                    <Preloader /> :
                    (props.posts.map((post, index) => <PostContainer key={`post-${index}`} index={index} post={post} />))
                    // (props.posts.map((post, index) => <PostContainer key={`post-${index}`} post={post}/>))
                    // (props.posts.map((post, index) => <Post key={`post-${index}`} post={post}/>))
                )}
            </div>
        </div>
    )
}

export default Posts;