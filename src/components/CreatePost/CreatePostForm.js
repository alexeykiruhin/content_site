import React from "react";
import { Field, Form } from "react-final-form";
import styles from './CreatePost.module.css';

const CreatePostForm = (props) => {

    const sendPostText = (obj) => {
        let postText = obj.postText;
        props.createPost(postText);
    }

    return (
        //доработать стилизацию
        <div className={styles.СreatePost}>
            {props.isCreate && 'Done'}
            <Form
                onSubmit={sendPostText}
                initialValues={{ postText: '' }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="postText"
                            // сюда нужно передать свой компонент со стилизацией
                            component='textarea'
                            type="text"
                            placeholder="Напишите тут свои мысли"
                            autoFocus={true}
                        />
                        <div className={'submit'}>
                            <button className={'createBTN'}>Запостить</button>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default CreatePostForm;