import React from 'react';
import styles from './TagSearch.module.css';
import { Field, Form } from 'react-final-form';

const TagSearchForm = () => {

    const handleInput = (obj) => {
        console.log(obj);
    }

    return (
        <div className={styles.tagSearchFormWrapper}>
            <Form
                onSubmit={handleInput}
                initialValues={{tagSearch: ''}}
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
                        <button>Искать</button>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default TagSearchForm;