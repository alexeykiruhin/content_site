import React from "react";
import './Posts.css'
import axios from "axios";

const Posts = (props) => {
    if (props.posts.length === 0) {
        axios.get('http://127.0.0.1:5000/posts').then(response => {
            let posts = response.data.posts;
            props.setPosts(posts);
        });
    }
    return (
        <div className={'Posts'}>
            <div className={'body'}>
                <div>Posts</div>
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