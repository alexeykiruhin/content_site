import React, { useState } from "react";
import styles from './FormControls.module.css';
import u from './icon/user.svg'

export const LoginNameField = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            <input className={styles.loginFormInput} {...input} {...props}/>
            <span className={styles.loginFormFocusInput} data-placeholder=''></span>
            {/* {hasError && <span className={styles.errorMessage}>{meta.error}</span>} */}
        </div>
    )
}