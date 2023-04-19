import React from "react";
import './CreatePost.css';

const CreatePost = (props) => {

    //props.handleClick
    return (
        <div className={'CreatePost'}>
            <div className={'wrapperCreatePost'}>
                {props.isCreate && 'Done'}
                <div className={'textArea'}>
                    <textarea name="text" id="createText" cols="30" rows="10">

                    </textarea>
                </div>
                <div className={'submit'}>
                    <button
                        className={'createBTN'}
                        onClick={() => props.handleClick(21, 'testest')}
                    >Запостить</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;