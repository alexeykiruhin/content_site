import React from "react";
import { Field, Form } from 'react-final-form';
import styles from './EditPost.module.css';
// import { NavLink } from "react-router-dom";

const EditPostForm = (props) => {

    const sendEditPost = (obj) => {
        let newPostText = obj.editPost;
        console.log(obj.editPost);
        props.editPost(props.idPost, newPostText);
    }
    console.log(props.isEditPost);

    return (
        <div className={styles.createComment}>
            <Form
                onSubmit={sendEditPost}
                initialValues={{ editPost: props.textPost }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={styles.wrapperCreateComment}>
                        <Field
                            className={styles.textAreaComment}
                            name="editPost"
                            // сюда нужно передать свой компонент со стилизацией
                            component='textarea'
                            type="text"
                            autoFocus={true}
                        />
                        <div className={styles.submitEditPost}>
                            <button type='submit' className={styles.editBtnSave}>Сохранить</button>
                            {/* <NavLink to={'/user/' + props.id}> */}
                                <button type='button' onClick={props.backToPosts} className={styles.editBtnBack}>Назад</button>
                            {/* </NavLink> */}
                        </div>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default EditPostForm;