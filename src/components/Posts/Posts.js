import React from "react";
import './Posts.css'

const Posts = (props) => {
    return (
        <div className={'Posts'}>
            <div className={'body'}>
                <div>Posts</div>
                {props.posts.posts.map(post => <div key={post.id}>
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