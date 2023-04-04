import React from 'react';
import axios from "axios";

class PostsC extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        if (this.props.posts.length === 0) {
        axios.get('http://127.0.0.1:5000/posts').then(response => {
            let posts = response.data.posts;
            this.props.setPosts(posts);
        });
    }
    }
    render() {
        return (
            <div className={'Posts'}>
                <div className={'body'}>
                <div>Posts</div>
                <hr/>
                {this.props.posts.map(post => <div key={post.id}>
                    <span>{post.nameUser}</span>
                    <br/>
                    <span>{post.textPost}</span>
                    <hr/>
                </div>)}
            </div>
            </div>
        )
    }
}

export default PostsC;