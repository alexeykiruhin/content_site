import React from "react";
import './CreatePost.css';

const CreatePost = (props) => {
    return (
        <div className={'CreatePost'}>
            <div className={'wrapperCreatePost'}>
                <div className={'textArea'}>
                    <textarea name="text" id="createText" cols="30" rows="10">

                    </textarea>
                </div>
                <div className={'submit'}>
                    <button
                        className={'createBTN'}
                        onClick={() => {console.log('post')}}
                    >Запостить</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;