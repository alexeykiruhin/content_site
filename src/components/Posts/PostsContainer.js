import {connect} from "react-redux";
import PostsC from "./PostsC";
import {setCount, setCurrentPage, setUsers} from "../../redux/reducers/postsReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        pageSize: state.postsPage.pageSize,
        count: state.postsPage.count,
        currentPage: state.postsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(setUsers(posts));
        },
        setCount: (count) => {
            dispatch(setCount(count));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsC);

export default PostsContainer;