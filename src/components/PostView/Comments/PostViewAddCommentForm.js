import React from "react";
import {Field, Form} from 'react-final-form';
import styles from '../PostView.module.css';

const PostViewAddCommentForm = (props) => {

    const sendCommentText = (obj) => {
        let text = obj.commentText;
        props.addComment(text);
    }

    return (
        <div className={styles.createComment}>
            {/* {props.isCreate && 'Done'} */}
            <Form
                onSubmit={sendCommentText}
                initialValues={{ commentText: '' }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={styles.wrapperCreateComment}>
                        <Field
                            className={styles.textAreaComment}
                            name="commentText"
                            // сюда нужно передать свой компонент со стилизацией
                            component='textarea'
                            type="text"
                            placeholder="Напишите тут свой комментарий"
                            autoFocus={true}
                        />
                        <div className={styles.submitComment}>
                            <button className={styles.createCommentBTN}>Закомментить</button>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default PostViewAddCommentForm;