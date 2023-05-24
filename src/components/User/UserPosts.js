import React from "react";
import './User.css';

const UserPosts = ({ posts, delPost, toggleEditPostWrapper }) => {
    return (
        <div className={'postsUserPage'}>
            <h3>Посты пользователя</h3>
            {posts.length !== 0 ?
                posts.map((post, index) => <div key={index} className={'post'}>
                    <button className={'editPost'} onClick={() => toggleEditPostWrapper(post[1], post[0])}>Edit</button>

                    <button className={'delPost'} onClick={() => delPost(post[1])}>Delete</button>
                    {
                        post[0].length > 50 ? post[0].slice(0, 50) + '...' : post[0]
                    }
                </div>) :
                <div>У пользователя ещё нет постов</div>
            }
        </div>
    )
}

export default UserPosts;