import React from "react";
import './User.css';
import EditPostForm from "./editPost/EditPostForm";

const EditUserPosts = ({ textPost, idPost, editPost, backToPosts, id, isEditPost }) => {
    return (
        <div className={'postsUserPage'}>
            <h3>Редактирование поста</h3>
            <EditPostForm textPost={textPost} idPost={idPost} editPost={editPost} backToPosts={backToPosts} id={id} isEditPost={isEditPost} />
        </div>
    )
}

export default EditUserPosts;