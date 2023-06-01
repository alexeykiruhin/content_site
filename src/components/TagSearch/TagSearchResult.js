import React from 'react';
import styles from './TagSearch.module.css';
import { NavLink } from 'react-router-dom';

const TagSearchResult = ({ result }) => {
    return (
        <div className={styles.tagSearchResultWrapper}>
            {result.map((r, index) => {
                if (!r.id) {
                    return (
                        <div className={styles.resultItem} key={index}>
                            {r.text.length > 50 ? r.text.slice(0, 50) + '...' : r.text}
                        </div>
                    )
                } else {
                    return (
                        <NavLink to={`/post/${r.id}`} className={styles.resultItem} key={index}>
                            <div>
                                {r.text.length > 50 ? r.text.slice(0, 50) + '...' : r.text}
                            </div>
                        </NavLink>
                    )
                }
            })}
        </div>
    )
}

export default TagSearchResult;