import {connect} from "react-redux";
import {setCount, setCurrentPage, setIsFetching, setPosts} from "../../redux/reducers/postsReducer";
import React from "react";
import axios from "axios";
import Posts from "./Posts";

class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`http://127.0.0.1:5000/posts?page=${this.props.currentPage}&page_size=2`)//?page=${this.props.currentPage}
            .then(response => {
                // let posts = response.data.posts;
                let posts = response.data.posts;
                console.log(response.data)
                let count = response.data.count;
                this.props.setPosts(posts);
                this.props.setCount(count);
                this.props.setIsFetching(false);
            });
    }

    setCurrentPage(currentPage) {
        this.props.setCurrentPage(currentPage);
        this.props.setIsFetching(true);
        axios.get(`http://127.0.0.1:5000/posts?page=${currentPage}&page_size=2`)//
            .then(response => {
                let posts = response.data.posts;
                console.log(posts)
                this.props.setPosts(posts);
                this.props.setIsFetching(false);
            });
    }

    render() {
        return <Posts
            isFetching={this.props.isFetching}
            posts={this.props.posts}
            pages={this.props.pages}
            count={this.props.count}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.setCurrentPage}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        pageSize: state.postsPage.pageSize,
        count: state.postsPage.count,
        currentPage: state.postsPage.currentPage,
        isFetching: state.postsPage.isFetching
    }
}

export default connect(mapStateToProps,
    {
        setPosts,
        setCount,
        setCurrentPage,
        setIsFetching
    })(PostsContainer);