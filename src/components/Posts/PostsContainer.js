import {connect} from "react-redux";
import PostsC from "./PostsC";
import {setUsers} from "../../redux/reducers/postsReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(setUsers(posts));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsC);

export default PostsContainer;