import React from "react";
import styles from './FormControls.module.css';

export const LoginNameField = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input} {...props} type="text"/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}