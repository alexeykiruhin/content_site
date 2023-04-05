import React from "react";
import './Posts.css'
import Preloader from "../Preloader/Preloader";

const Posts = (props) => {
    let pagesCount = Math.ceil(props.count / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={'Posts'}>
            <div className={'body'}>
                <div className={'pagination'}>
                    {pages.map(page => {
                        return <span
                            onClick={() => {
                                props.setCurrentPage(page);
                            }}
                            key={page}
                            className={
                                (props.currentPage === 0 ? 1 : props.currentPage) === page ? 'select pag' : 'notselect pag'
                            }
                        >{page}</span>
                    })}
                </div>
                <div>Всего постов: {props.count}</div>
                <br/>
                {(props.isFetching ? <Preloader /> : (props.posts.map(post => <div key={post.id}>
                    <span>{post.nameUser}</span>
                    <br/>
                    <span>{post.textPost}</span>
                    <hr/>
                </div>)))}
            </div>
        </div>
    )
}

export default Posts;