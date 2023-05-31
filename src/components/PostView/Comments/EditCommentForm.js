import React, { useRef, useEffect } from 'react';
import styles from './PostComment.module.css';
import { Field, Form } from 'react-final-form';


const EditCommentForm = ({ commentText, sizeText, handleEditComment, handleDelComment }) => {

    const textareaRef = useRef(null);

    useEffect(() => {
        adjustTextareaHeight();
    }, []);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        console.log(sizeText);
        textarea.style.width = '690px';
        // textarea.style.height = `${textarea.scrollHeight}px`;
        textarea.style.height = `${sizeText - 18}px`;
    };

    const handleEditCommentSave = (obj) => {
        handleEditComment(obj.textComment);
    };

    const handleDel = () => {
        handleDelComment();
        console.log('del');
    }

    return (
        <div className={styles.editCommentWrapper}>
            <Form
                onSubmit={handleEditCommentSave}
                initialValues={{ textComment: commentText }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={styles.editCommentForm}>
                        <Field
                            className={styles.editCommentInput}
                            name='textComment'
                            component='textarea'
                            type='text'
                            // placeholder='Напишите тег для поиска'
                            autoFocus={true}
                            ref={textareaRef}
                            rows={1}
                        // onChange={handleInputChange}
                        />
                        <button type='submit' className={styles.editCommentBtn}>Сохранить</button>
                        <button type='button' onClick={handleDel} className={styles.editCommentBtn + ' ' + styles.delete}>Удалить</button>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default EditCommentForm;