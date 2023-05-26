import React from "react";
import './Posts.css'
import Preloader from "../common/Preloader/Preloader";
import PostContainer from "../Post/PostContainer";



const Posts = (props) => {

    return (
        <div className={'Posts'}>
            <div className={'body'} >
                <div className={'wrapperDifferentPosts'}>
                    <div className={!props.isSubsPosts ? 'active' : ''} onClick={props.togglePostsType}>Все посты</div>
                    <div className={props.isSubsPosts ? 'active' : ''} onClick={props.togglePostsType}>Подписки</div>
                </div>
                {(props.isFetching ?
                    <Preloader /> :
                    // (props.posts.map((post, index) => <PostContainer key={`post-${index}`} index={index} post={post} />))
                    (props.posts.map((post, index) => {
                        if (index !== props.posts.length-1) return <PostContainer key={`post-${index}`} index={index} post={post} />
                        return <PostContainer refIS={props.refIS} key={`post-${index}`} index={index} post={post} />
                    }))
                )}
            </div>
        </div>
    )
}

export default Posts;