import React from 'react';
import axios from "axios";
import './Posts'

class PostsC extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    componentDidMount() {
        console.log(this.props.currentPage)
        if (this.props.posts.length === 0) {
            axios.get(`http://127.0.0.1:5000/posts?page=${this.props.currentPage}`)
                .then(response => {
                let posts = response.data.posts;
                let count = response.data.count;
                this.props.setPosts(posts);
                this.props.setCount(count);
            });
        }
    }

    setCurrentPage(currentPage) {
        // обработка ошибки СORS при передаче гет параметра page=1
        if (currentPage === 1) {
            currentPage = 0;
        }
        this.props.setCurrentPage(currentPage);
        axios.get(`http://127.0.0.1:5000/posts?page=${currentPage}`).then(response => {
            let posts = response.data.posts;
            let count = response.data.count;
            this.props.setPosts(posts);
            this.props.setCount(count);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.count / this.props.pageSize);
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
                                    this.setCurrentPage(page)
                                }}
                                key={page}
                                className={
                                    (this.props.currentPage === 0 ? 1 : this.props.currentPage) === page ? 'select' : 'notselect'
                                }
                            >{page}</span>
                        })}
                    </div>
                    <div>Posts</div>
                    <hr/>
                    <div>Count: {this.props.count}</div>
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