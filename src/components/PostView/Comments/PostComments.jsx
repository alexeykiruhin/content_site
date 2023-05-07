import React, { useEffect } from "react"
import PostComment from "./PostComment";


const PostComments = props => {

    // let paramPostId = useParams();


    // тут дёргаем подгрузку комментов передавая айди поста paramPostId.postId
    useEffect(() => {
        console.log(props.comments);
    }, [])

    return (
        props.comments.map((comment, index) => <PostComment key={index} comment={comment} />)
        // < PostComment />
    )
}

export default PostComments;