import React from 'react';
import styles from './TagSearch.module.css';
import TagSearchForm from './TagSearchForm';
import TagSearchResult from './TagSearchResult';

const TagSearch = () => {
    return (
        <div className={styles.tagSearchWrapper}>
            <h3>Поиск по тегам</h3>
            {/* Элементы поиска */}
            <TagSearchForm />
            {/* Вывод результата */}
            <TagSearchResult />
        </div>
    )
}

export default TagSearch;