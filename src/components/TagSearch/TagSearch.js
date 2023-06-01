import React from 'react';
import styles from './TagSearch.module.css';
import TagSearchForm from './TagSearchForm';
import TagSearchResult from './TagSearchResult';
import { useDispatch, useSelector } from "react-redux";
import { searchThunkCreator } from '../../redux/thunk/searchThunk';

const TagSearch = () => {

    const dispatch = useDispatch();
    const result = useSelector(state => state.search.result);

    const handleSearch = (tag) => {
        console.log(`search`, tag);
        dispatch(searchThunkCreator(tag));
    }

    return (
        <div className={styles.tagSearchWrapper}>
            <div className={styles.tagSearchWrapperInner}>
                <h3>Поиск по тегам</h3>
                {/* Элементы поиска */}
                <TagSearchForm handleSearch={handleSearch} />
                {/* Вывод результата */}
                <TagSearchResult result={result}/>
            </div>
        </div>
    )
}

export default TagSearch;