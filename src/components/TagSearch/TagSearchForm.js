import React from 'react';
import styles from './TagSearch.module.css';
import { Field, Form } from 'react-final-form';
import { useSelector } from 'react-redux';

const TagSearchForm = () => {

    const tag = useSelector(state => state.tagSearch.tag)

    const handleInput = (obj) => {
        console.log(obj.tagSearch);
    }

    return (
        <div className={styles.tagSearchFormWrapper}>
            <Form
                onSubmit={handleInput}
                initialValues={{tagSearch: tag}}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={styles.tagSearchForm}>
                        <Field
                            className={styles.tagSearchInput}
                            name='tagSearch'
                            component='input'
                            type='text'
                            placeholder='Напишите тег для поиска'
                            autoFocus={true}
                        />
                        <button className={styles.tagSearchFormBtn}>Искать</button>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default TagSearchForm;