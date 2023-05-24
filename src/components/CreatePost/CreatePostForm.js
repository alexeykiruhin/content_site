import React from "react";
import { Field, Form } from "react-final-form";
import styles from './CreatePost.module.css';

const CreatePostForm = (props) => {

    const sendPostText = (obj) => {
        let postText = obj.postText;
        let tags = obj.tags.split(',');
        props.createPost(postText, tags);
    }

    return (
        //доработать стилизацию
        <div className={styles.createPost}>
            {props.isCreate && 'Done'}
            <Form
                onSubmit={sendPostText}
                initialValues={{ postText: '', tags: '' }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={styles.wrapperCreatePost}>
                        <div className={styles.wrapperFields}>
                            <Field
                                className={styles.textArea}
                                name="postText"
                                // сюда нужно передать свой компонент со стилизацией
                                component='textarea'
                                type="text"
                                placeholder="Напишите тут свои мысли"
                                autoFocus={true}
                            />
                            <Field
                                className={styles.textAreaTags}
                                name="tags"
                                component='textarea'
                                type="text"
                                placeholder="напишите теги через запятую"
                            // autoFocus={true}
                            />
                        </div>
                        <div className={styles.submit}>
                            <button className={styles.createBTN}>Запостить</button>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default CreatePostForm;