import React from "react";
import './Posts.css'

const Posts = (props) => {
    let pagesCount = Math.ceil(props.count / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={'Posts'}>
            <div className={'body'}>
                <div>
                    {pages.map(page => {
                        return <span
                            onClick={() => {
                                props.setCurrentPage(page);
                            }}
                            key={page}
                            className={
                                (props.currentPage === 0 ? 1 : props.currentPage) === page ? 'select' : 'notselect'
                            }
                        >{page}</span>
                    })}
                </div>
                <div>Posts</div>
                <hr/>
                <div>Count: {props.count}</div>
                <hr/>
                {props.posts.map(post => <div key={post.id}>
                    <span>{post.nameUser}</span>
                    <br/>
                    <span>{post.textPost}</span>
                    <hr/>
                </div>)}
            </div>
        </div>
    )
}

export default Posts;