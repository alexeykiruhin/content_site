import React, { useEffect } from "react"
import PostComment from "./PostComment";


const PostComments = props => {

    // тут дёргаем подгрузку комментов
    useEffect(() => {
        console.log('loads comment');
    }, [])

    return (
        <PostComment />
    )
}

export default PostComments;